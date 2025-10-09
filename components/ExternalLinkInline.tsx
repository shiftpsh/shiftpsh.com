"use client";

import styled from "@emotion/styled";
import { Space, Typo } from "@solved-ac/ui-react";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";

const LinkText = styled.span`
  display: inline;
`;

const Link = styled.a`
  display: inline;
  text-decoration: none;
  & > span {
    text-decoration: underline;
  }
`;

const ExternalLinkInline = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" {...rest}>
      <LinkText>{children}</LinkText>
      <Space w={2} as="span" />
      <Typo description>
        <IconExternalLink size="0.8em" />
      </Typo>
      <Space w={2} as="span" />
    </Link>
  );
};

export default ExternalLinkInline;
