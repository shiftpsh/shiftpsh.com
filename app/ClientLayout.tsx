/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { PropsWithChildren } from "react";
import MainContainer from "../components/MainContainer";
import { css } from "@emotion/react";
import useTranslation from "../hooks/useTranslation";
import { translations } from "./translations";
import {
  IconDownload,
  IconExternalLink,
  IconHome,
  IconStar,
} from "@tabler/icons-react";

const Fixed = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const TopLinksRow = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const TopLinkCss = css`
  flex: 1 1 auto;
  height: 96px;
  display: flex;
  align-items: center;
  min-width: 0;
  text-decoration: none;
  gap: 4px;
  &:hover {
    color: black;
    font-weight: 600;
  }
`;

const TopLink = styled(Link)`
  color: ${({ theme }) => theme.color.text.secondary.main};
  ${TopLinkCss}
`;

const TopLinkExternal = styled.a`
  color: ${({ theme }) => theme.color.text.secondary.main};
  ${TopLinkCss}
`;

const Language = styled(Link)`
  flex: 0 0 32px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
  text-decoration: none;
`;

const Flag = styled.img`
  width: 24px;
  height: 24px;
`;

const ClientLayout = ({ children }: PropsWithChildren) => {
  const { t, lang } = useTranslation(translations);
  const { top_navigation: nav } = t;

  return (
    <>
      <Fixed>
        <MainContainer>
          <TopLinksRow>
            <TopLink href="/">
              <IconHome />
            </TopLink>
            <TopLink href="/links">{nav.links}</TopLink>
            <TopLink href="/cv">{nav.cv}</TopLink>
            <TopLink href="/gallery">{nav.gallery}</TopLink>
            <TopLinkExternal
              href="https://blog.shift.moe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {nav.blog}
            </TopLinkExternal>
            <TopLink href="/downloads">
              <IconDownload />
            </TopLink>
            <TopLink href="/hanbyeol">
              <IconStar />
            </TopLink>
            <Language href={lang === "ko" ? "?lang=en" : "?lang=ko"}>
              <Flag
                src={
                  lang === "ko" ? "/img/flag/ko_kr.svg" : "/img/flag/en_us.svg"
                }
                alt="Language"
                width="32"
                height="32"
              />
            </Language>
          </TopLinksRow>
        </MainContainer>
      </Fixed>
      {children}
    </>
  );
};

export default ClientLayout;
