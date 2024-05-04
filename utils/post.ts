import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";
import {
  Array as ArrayType,
  Record,
  Static,
  String as StringType,
} from "runtypes";

// https://github.com/vercel/next.js/discussions/50897

const CWD = process.cwd();

export const GALLERY_FOLDER_PATH = path.join(CWD, "public", "posts", "gallery");

export const HANBYEOL_FOLDER_PATH = path.join(
  CWD,
  "public",
  "posts",
  "hanbyeol"
);

const FrontmatterGuard = Record({
  title: StringType,
  date: StringType,
  thumbnail: StringType.optional(),
  mainImage: StringType.optional(),
  downloadableImage: StringType.optional(),
  link: StringType.optional(),
  tags: ArrayType(StringType).optional(),
});

export type Frontmatter = Static<typeof FrontmatterGuard> & {
  slug: string;
  thumbnail: string;
  tags: string[];
  downloadableImageSize: number | null;
};

export const readPostFileContent = async (slug: string, folder: string) => {
  const filenameCandidates = [
    `${folder}/${slug}.mdx`,
    `${folder}/${slug}/index.mdx`,
  ];

  const filename = filenameCandidates.find((filename) =>
    fs.existsSync(filename)
  );

  if (!filename)
    throw new Error(`No such file: ${JSON.stringify(filenameCandidates)}`);

  const fileContent = fs.readFileSync(filename, {
    encoding: "utf-8",
  });
  return fileContent;
};

type ResolveImageUrlFn = {
  (src: undefined, slug: string, folder: string): null;
  (src: string, slug: string, folder: string): string;
  (src: string | undefined, slug: string, folder: string): string | null;
};

const resolveImageUrl: ResolveImageUrlFn = (
  src,
  slug: string,
  folder: string
) => {
  if (typeof src !== "string") return null;
  if (/\.\//.test(src)) {
    const localFolderPath = path.join(folder, slug);
    const localImgPath = src
      .replace(/^\.\//, `${localFolderPath}/`)
      .replace(CWD, "")
      .replace(/^\/?public/, "");
    return localImgPath;
  }
  return src as any;
};

export const getPostBySlug = async (slug: string, folder: string) => {
  const fileSlug = slug.replace(/\.mdx$/, "");
  const fileContent = await readPostFileContent(fileSlug, folder);
  const serialized = await serialize(fileContent, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      //   rehypePlugins: [],
    },
  });
  const { frontmatter } = serialized;
  const { title, date, thumbnail, mainImage, downloadableImage, tags, link } =
    FrontmatterGuard.check(frontmatter);

  const resolvedMainImage =
    resolveImageUrl(mainImage, slug, folder) || undefined;

  const resolvedDownloadableImage =
    resolveImageUrl(downloadableImage, slug, folder) || resolvedMainImage;

  const downloadableImageSize = resolvedDownloadableImage
    ? fs.statSync(path.join(CWD, "public", resolvedDownloadableImage)).size
    : null;

  return {
    meta: {
      title,
      date: new Date(date).toISOString(),
      // TODO create and replace thumnail image
      thumbnail:
        resolveImageUrl(thumbnail, slug, folder) || "/img/logo-splash.svg",
      mainImage: resolvedMainImage,
      downloadableImage: resolvedDownloadableImage,
      downloadableImageSize,
      tags: tags || [],
      slug: fileSlug,
      link,
    } satisfies Frontmatter,
    serialized,
  };
};

export const getFrontmatterBySlug = async (slug: string, folder: string) => {
  const post = await getPostBySlug(slug, folder);
  return post.meta;
};

export const getAllPostSlugsInDirectory = async (
  path: string,
  prefix: string
): Promise<string[]> => {
  const replacedPrefix = prefix.replace(/\/$/, "");

  // first extract .mdx files in the directory
  const files = await fs.promises.readdir(path);
  const slugs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .map((file) => file.replace(/^index$/, ""))
    .map((file) => `${replacedPrefix}/${file}`)
    .map((file) => file.replace(/\/$/, ""));

  // then extract subdirectories
  const subdirectories = files.filter((file) =>
    fs.lstatSync(`${path}/${file}`).isDirectory()
  );
  const subdirectorySlugs = await Promise.all(
    subdirectories.map((subdirectory) =>
      getAllPostSlugsInDirectory(
        `${path}/${subdirectory}`,
        `${replacedPrefix}/${subdirectory}`
      )
    )
  );

  return [
    ...slugs,
    ...subdirectorySlugs.reduce((acc, cur) => [...acc, ...cur], []),
  ];
};

export const getAllPostSlugs = async (folder: string): Promise<string[]> => {
  return getAllPostSlugsInDirectory(folder, "");
};

export const getAllPosts = async (folder: string) => {
  const slugs = await getAllPostSlugs(folder);
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, folder))
  );
  return posts;
};

export const getAllPostFrontmatters = async (folder: string) => {
  const slugs = await getAllPostSlugs(folder);
  const frontmatters = await Promise.all(
    slugs.map((slug) => getFrontmatterBySlug(slug, folder))
  );
  return frontmatters;
};
