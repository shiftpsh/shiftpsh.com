"use client";

import styled from "@emotion/styled";
import { Divider, Space, Typo } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";
import DownloadLink from "../../../components/DownloadLink";
import ExternalLink from "../../../components/ExternalLink";
import LinksRow from "../../../components/LinksRow";
import MainContainer from "../../../components/MainContainer";
import { formatFilesize } from "../../../utils/formatNumber";
import { Frontmatter } from "../../../utils/post";
import { getTag } from "../../../components/gallery/tags";
import Tag from "../../../components/gallery/Tag";
import ItemsRow from "../../../components/ItemsRow";

const TopPadding = styled.div`
  padding-top: 96px;
  background-color: ${({ theme }) => theme.color.background.card.dark};
`;

const TopImage = styled.img`
  display: block;
  width: 100%;
  max-height: 100vmin;
  margin: 0 auto;
  object-fit: scale-down;
`;

const TopVideo = styled.video`
  display: block;
  width: 100%;
  max-height: 100vmin;
  margin: 0 auto;
  object-fit: scale-down;
`;

interface Props {
  frontmatter: Frontmatter;
}

const ClientPage = ({ frontmatter, children }: PropsWithChildren<Props>) => {
  const {
    mainImage,
    downloadableImage,
    downloadableImageSize,
    title,
    date,
    tags,
    link,
  } = frontmatter;

  const dateObject = new Date(date);

  const type = /\.mp4$/.test(mainImage || "") ? "비디오" : "이미지";
  const mainIsNotOriginal = mainImage !== downloadableImage;

  return (
    <>
      {mainImage && (
        <>
          <TopPadding />
          {/\.mp4$/.test(mainImage) ? (
            <TopVideo autoPlay loop muted playsInline>
              <source src={mainImage} type="video/mp4" />
            </TopVideo>
          ) : (
            <TopImage src={mainImage} alt={title} />
          )}
        </>
      )}
      <MainContainer>
        {mainImage ? <Space h={48} /> : <Space h={160} />}
        <Typo h1>{title}</Typo>
        <LinksRow>
          {new Intl.DateTimeFormat("ko-KR").format(dateObject)}
          {link && <ExternalLink href={link}>링크</ExternalLink>}
          {downloadableImage && (
            <DownloadLink href={downloadableImage}>
              {mainIsNotOriginal ? `${type} 원본 다운로드` : `${type} 다운로드`}
              {downloadableImageSize
                ? ` (${formatFilesize(downloadableImageSize)})`
                : ""}
            </DownloadLink>
          )}
        </LinksRow>
        <Divider />
        {tags && (
          <>
            <ItemsRow style={{ alignItems: "center" }}>
              {tags.map((tag, index) => (
                <Tag key={index} {...getTag(tag)} />
              ))}
            </ItemsRow>
            <Divider />
          </>
        )}
        {children}
        <Space h={80} />
      </MainContainer>
    </>
  );
};

export default ClientPage;
