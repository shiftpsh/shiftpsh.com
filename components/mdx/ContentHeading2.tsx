"use client";

import styled from "@emotion/styled";
import { Typo, TypoProps } from "@solved-ac/ui-react";

const ContentHeading2Content = styled(Typo)`
  margin: 48px 0;
`;

const ContentHeading2 = (props: TypoProps) => {
  return <ContentHeading2Content h2 {...props} />;
};

export default ContentHeading2;