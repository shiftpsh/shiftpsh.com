"use client";

import { Space, Typo } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";
import MainContainer from "../../../components/MainContainer";
import { Frontmatter } from "../../../utils/post";
import FullwidthImage from "../../../components/FullwidthImage";
import LinksRow from "../../../components/LinksRow";
import ExternalLink from "../../../components/ExternalLink";
import styled from "@emotion/styled";

const TopPadding = styled.div`
  padding-top: 96px;
  background-color: ${({ theme }) => theme.color.background.card.dark};
`;

interface Props {
  frontmatter: Frontmatter;
}

const ClientPage = ({ frontmatter, children }: PropsWithChildren<Props>) => {
  const { mainImage, title, tags, link } = frontmatter;
  return (
    <>
      {mainImage && (
        <>
          <TopPadding />
          <FullwidthImage src={mainImage} />
        </>
      )}
      <MainContainer>
        {mainImage ? <Space h={48} /> : <Space h={160} />}
        <Typo h1>{title}</Typo>
        {link && (
          <LinksRow>
            <ExternalLink href={link}>링크</ExternalLink>
          </LinksRow>
        )}
        {children}
        <Space h={160} />
      </MainContainer>
    </>
  );
};

export default ClientPage;
