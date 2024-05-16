"use client";

import styled from "@emotion/styled";
import { Typo, TypoProps } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";

const ContentHeading1Background = styled.div`
  padding-top: 64px;
  border-bottom: ${({ theme }) => theme.styles.border()};
`;

const ContentHeading1 = (props: PropsWithChildren<TypoProps>) => {
  return (
    <ContentHeading1Background>
      <Typo h1 {...props} />
    </ContentHeading1Background>
  );
};

export default ContentHeading1;