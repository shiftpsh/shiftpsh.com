"use client";

import styled from "@emotion/styled";
import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";

const LinkText = styled.span`
  display: inline;
`;

const Link = styled.a`
  display: inline;
  text-decoration: none;
  &:hover > span {
    text-decoration: underline;
  }
`;

const DownloadLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link {...rest}>
      <IconDownload /> <LinkText>{children}</LinkText>
    </Link>
  );
};

export default DownloadLink;
