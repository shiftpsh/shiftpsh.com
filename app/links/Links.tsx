import styled from "@emotion/styled";

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GameLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
