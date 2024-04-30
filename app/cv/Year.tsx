import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

const YearContainer = styled.span`
  float: right;
  padding-left: 8px;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const FloatClear = styled.span`
  display: block;
  clear: both;
`;

const Year = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <>
      <YearContainer {...props} />
      <FloatClear />
    </>
  );
};

export default Year;
