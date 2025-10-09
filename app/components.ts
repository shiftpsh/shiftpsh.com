"use client";

import styled from "@emotion/styled";

export const Content = styled.p`
  color: #393e45;
  text-align: ${({ theme }) => (theme.lang === "ko" ? "justify" : "left")};
  margin: 1em 0;
`;
