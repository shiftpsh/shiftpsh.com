import styled from "@emotion/styled";

const TitleBredcrumbContainer = styled.span`
  color: ${({ theme }) => theme.color.text.secondary.main};
  font-weight: 500;
  font-size: 0.8em;
  vertical-align: 0.1em;
`;

const TitieBreadcrumb = ({
  children,
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <TitleBredcrumbContainer>{children} ›</TitleBredcrumbContainer>;
};

export default TitieBreadcrumb;
