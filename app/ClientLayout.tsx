"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { PropsWithChildren } from "react";
import MainContainer from "../components/MainContainer";
import { css } from "@emotion/react";

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

const ClientLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Fixed>
        <MainContainer>
          <TopLinksRow>
            <TopLink href="/">홈</TopLink>
            <TopLink href="/links">링크</TopLink>
            <TopLink href="/cv">이력</TopLink>
            <TopLink href="/gallery">작업</TopLink>
            <TopLink href="/downloads">자료</TopLink>
            <TopLinkExternal
              href="https://blog.shift.moe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              블로그
            </TopLinkExternal>
            <TopLink href="/hanbyeol">☆</TopLink>
          </TopLinksRow>
        </MainContainer>
      </Fixed>
      {children}
    </>
  );
};

export default ClientLayout;
