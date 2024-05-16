import styled from "@emotion/styled";
import { Typo } from "@solved-ac/ui-react";
import { IconTag } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

const TagContainer = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
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

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 4px;
`;

export interface TagProps {
  src?: string;
  href?: string;
}

const Tag = ({ src, href, children }: PropsWithChildren<TagProps>) => {
  const renderedChildren = (
    <>
      {src ? (
        <ProfileImage src={src} />
      ) : (
        <>
          <Typo description>
            <IconTag />
          </Typo>
        </>
      )}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <TagContainerLink href={href} target="_blank" rel="noopener noreferrer">
        {renderedChildren}
      </TagContainerLink>
    );
  }
  return <TagContainer>{renderedChildren}</TagContainer>;
};

export default Tag;
