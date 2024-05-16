"use client";

import styled from "@emotion/styled";
import { IconArrowUpRight } from "@tabler/icons-react";
import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

const LinkText = styled.span`
  display: inline;
`;

const Link = styled(NextLink)`
  display: inline;
  text-decoration: none;
  &:hover > span {
    text-decoration: underline;
  }
`;

const InternalLink = ({ children, ...rest }: PropsWithChildren<LinkProps>) => {
  return (
    <Link {...rest}>
      <LinkText>{children}</LinkText> <IconArrowUpRight />
    </Link>
  );
};

export default InternalLink;
