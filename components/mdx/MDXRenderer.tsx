"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXComponents from "./MDXComponents";

const MDXRenderer = (props: MDXRemoteSerializeResult) => {
  return <MDXRemote {...props} components={MDXComponents} />;
};

export default MDXRenderer;
