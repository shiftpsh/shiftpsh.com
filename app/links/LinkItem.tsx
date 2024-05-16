import styled from "@emotion/styled";
import { IconCopy, IconExternalLink } from "@tabler/icons-react";
import { ElementType, ReactNode, useEffect, useState } from "react";
import { transparentize } from "polished";

const LinkRow = styled.a<{
  $color?: string;
}>`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  border: ${({ theme }) => theme.styles.border()};
  transition: background-color 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  &:hover {
    border-color: ${({ $color, theme }) =>
      $color || theme.color.text.secondary.main};
    background-color: ${({ $color, theme }) =>
      transparentize(0.9, $color || theme.color.text.secondary.main)};
  }
`;

const LinkIconContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const LinkCaption = styled.span`
  font-weight: 600;
  flex: 1;
`;

const LinkDescription = styled.span`
  text-align: right;
`;

const EmailImage = styled.img`
  height: 1em;
  vertical-align: middle;
`;

export const GameIcon = styled.img`
  height: 24px;
  width: 24px;
  vertical-align: middle;
`;

interface LinkItemProps {
  color?: string;
  icon: ReactNode;
  caption: ReactNode;
  description?: ReactNode;
  href: string;
}

export const LinkItem = ({
  color,
  icon,
  caption,
  description,
  href,
}: LinkItemProps) => {
  return (
    <LinkRow
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      $color={color}
    >
      <LinkIconContainer style={{ color }}>{icon}</LinkIconContainer>
      <LinkCaption>{caption}</LinkCaption>
      <LinkDescription>{description}</LinkDescription>
      <LinkIconContainer>
        <IconExternalLink />
      </LinkIconContainer>
    </LinkRow>
  );
};

interface EmailLinkItemProps {
  color?: string;
  icon: ReactNode;
  caption: ReactNode;
  src: string;
  email: string;
}

export const EmailLinkItem = ({
  color,
  icon,
  caption,
  src,
  email,
}: EmailLinkItemProps) => {
  const [clientInitialized, setClientInitialized] = useState(false);

  useEffect(() => {
    setClientInitialized(true);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(email);
    alert("메일 주소를 복사했습니다.");
  };

  return (
    <LinkRow
      as="div"
      role="button"
      tabIndex={0}
      onClick={handleCopyAddress}
      $color={color}
    >
      <LinkIconContainer style={{ color }}>{icon}</LinkIconContainer>
      <LinkCaption>{caption}</LinkCaption>
      <LinkDescription>
        {<EmailImage src={src} alt={clientInitialized ? email : ""} />}
      </LinkDescription>
      <LinkIconContainer>
        <IconCopy />
      </LinkIconContainer>
    </LinkRow>
  );
};

interface CopyLinkProps {
  color?: string;
  icon: ReactNode;
  caption: ReactNode;
  description?: ReactNode;
  copyText: string;
  copyTextMessage?: string;
}

export const CopyLinkItem = ({
  color,
  icon,
  caption,
  description,
  copyText,
  copyTextMessage,
}: CopyLinkProps) => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(copyText);
    alert(copyTextMessage || "복사했습니다.");
  };

  return (
    <LinkRow
      as="div"
      role="button"
      tabIndex={0}
      onClick={handleCopyAddress}
      $color={color}
    >
      <LinkIconContainer style={{ color }}>{icon}</LinkIconContainer>
      <LinkCaption>{caption}</LinkCaption>
      <LinkDescription>{description}</LinkDescription>
      <LinkIconContainer>
        <IconCopy />
      </LinkIconContainer>
    </LinkRow>
  );
};
