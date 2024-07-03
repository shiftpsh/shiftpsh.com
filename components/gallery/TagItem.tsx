import styled from "@emotion/styled";
import { Typo } from "@solved-ac/ui-react";
import { IconTag } from "@tabler/icons-react";
import { Tag } from "./tags";

const TagContainer = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const TagContainerLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileImage = styled.img<{
  compact?: boolean;
}>`
  width: ${({ compact }) => (compact ? "1.5em" : "36px")};
  height: ${({ compact }) => (compact ? "1.5em" : "36px")};
  border-radius: 50%;
  margin-right: 4px;
`;

interface Props {
  tag: Tag;
  unclickable?: boolean;
  compact?: boolean;
}

const TagItem = ({ tag, unclickable, compact = false }: Props) => {
  const { src, href, render } = tag;

  const renderedChildren = (
    <>
      {src ? (
        <ProfileImage src={src} compact={compact} />
      ) : (
        <>
          <Typo description>
            <IconTag />
          </Typo>
        </>
      )}
      <span>{render}</span>
    </>
  );

  if (href && !unclickable) {
    return (
      <TagContainerLink href={href} target="_blank" rel="noopener noreferrer">
        {renderedChildren}
      </TagContainerLink>
    );
  }
  return <TagContainer>{renderedChildren}</TagContainer>;
};

export default TagItem;
