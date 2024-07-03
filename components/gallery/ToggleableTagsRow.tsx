"use client";

import styled from "@emotion/styled";
import MainContainer from "../MainContainer";

export const ToggleableTagsRow = styled(MainContainer)`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;

  @media (max-width: 540px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-top: 8px;
  }
`;
