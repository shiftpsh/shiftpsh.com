"use client";

import Gallery from "../../components/gallery/Gallery";
import { Frontmatter } from "../../utils/post";

interface Props {
  posts: Frontmatter[];
}

const ClientPage = ({ posts }: Props) => {
  return (
    <>
      <Gallery prefix="/hanbyeol" items={posts} />
    </>
  );
};

export default ClientPage;
