import styled from "@emotion/styled";

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 1.5em;
  letter-spacing: -0.05ch;
  margin-top: 32px;
  margin-bottom: 16px;
  margin-left: -0.05ch;
  text-align: ${({ theme }) => (theme.lang === "ko" ? "justify" : "left")};

  @media (max-width: 768px) {
    font-size: 1.25em;
  }
`;

export default SectionCaption;
