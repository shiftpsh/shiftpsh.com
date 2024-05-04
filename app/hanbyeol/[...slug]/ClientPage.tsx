"use client";

import { Space, Typo } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";
import MainContainer from "../../../components/MainContainer";
import { Frontmatter } from "../../../utils/post";

interface Props {
  frontmatter: Frontmatter;
}

const ClientPage = ({ frontmatter, children }: PropsWithChildren<Props>) => {
  return (
    <MainContainer>
      <Space h={160} />
      <Typo h1>{frontmatter.title}</Typo>
      {children}
      <Space h={160} />
    </MainContainer>
  );
};

export default ClientPage;
