import { Suspense } from "react";
import MDXRenderer from "../../../components/mdx/MDXRenderer";
import {
  HANBYEOL_FOLDER_PATH,
  getAllPostSlugs,
  getPostBySlug,
} from "../../../utils/post";
import ClientPage from "./ClientPage";

interface Params {
  slug: string[];
}

interface Props {
  params: Params;
}

const Page = async ({ params }: Props) => {
  const { slug } = params;

  try {
    const { meta, serialized } = await getPostBySlug(
      slug.join("/"),
      HANBYEOL_FOLDER_PATH
    );
    return (
      <Suspense>
        <ClientPage frontmatter={meta}>
          <MDXRenderer {...serialized} />
        </ClientPage>
      </Suspense>
    );
  } catch (e) {
    console.error(e);
    return <div>404</div>;
  }
};

export default Page;

export async function generateStaticParams() {
  const posts = await getAllPostSlugs(HANBYEOL_FOLDER_PATH);
  return posts.map((post) => ({
    slug: post.split("/").filter((s) => s !== ""),
  }));
}
