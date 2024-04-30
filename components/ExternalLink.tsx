"use client";

import styled from "@emotion/styled";
import { IconArrowUpRight } from "@tabler/icons-react";

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

const ExternalLink = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" {...rest}>
      <LinkText>{children}</LinkText> <IconArrowUpRight />
    </Link>
  );
};

export default ExternalLink;
