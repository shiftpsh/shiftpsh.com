"use client";

import { Button } from "@solved-ac/ui-react";
import { Tag } from "./tags";
import { PropsWithChildren } from "react";
import TagItem from "./TagItem";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const ButtonChildren = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5ch;
`;

const TagButton = styled(Button)`
  font-size: 80%;
  padding: 0.5em;
  white-space: nowrap;
`;

interface Props {
  tag: Tag;
  value: boolean;
  reduceOpacity?: boolean;
  onChange?: (value: boolean) => void;
}

const ToggleableTag = ({
  tag,
  value,
  reduceOpacity,
  onChange,
  children,
}: PropsWithChildren<Props>) => {
  const theme = useTheme();
  return (
    <TagButton
      onClick={() => onChange?.(!value)}
      transparent={!value}
      backgroundColor={value ? theme.color.background.card.dark : undefined}
      style={{
        opacity: reduceOpacity ? 0.6 : 1,
      }}
      circle
    >
      <ButtonChildren>
        <TagItem tag={tag} unclickable compact />
        {children}
      </ButtonChildren>
    </TagButton>
  );
};

export default ToggleableTag;
