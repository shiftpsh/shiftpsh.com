import styled from "@emotion/styled";
import {
  IconLoader,
  IconLoader2,
  IconLoader3,
  IconProps,
} from "@tabler/icons-react";

const AnimatedContainer = styled.span`
  display: inline-block;
  vertical-align: middle;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const IconLoaderAnimated = (props: Omit<IconProps, "ref">) => {
  return (
    <AnimatedContainer>
      <IconLoader {...props} />;
    </AnimatedContainer>
  );
};

export const IconLoader2Animated = (props: Omit<IconProps, "ref">) => {
  return (
    <AnimatedContainer>
      <IconLoader2 {...props} />;
    </AnimatedContainer>
  );
};

export const IconLoader3Animated = (props: Omit<IconProps, "ref">) => {
  return (
    <AnimatedContainer>
      <IconLoader3 {...props} />;
    </AnimatedContainer>
  );
};
