import styled from "@emotion/styled";
import { IconCopy, IconExternalLink } from "@tabler/icons-react";
import { transparentize } from "polished";
import { ReactNode, useEffect, useState } from "react";

interface LinkCardProps {
  $color?: string;
}

interface LinkBgProps {
  $width?: string | number;
  $top?: string | number;
  $right?: string | number;
  $opacity?: number;
}

const len = (v: string | number | undefined, fallback: string) =>
  v === undefined ? fallback : typeof v === "number" ? `${v}px` : v;

const LinkBg = styled.img<LinkBgProps>`
  position: absolute;
  top: ${({ $top }) => len($top, "0")};
  right: ${({ $right }) => len($right, "0")};
  width: ${({ $width }) => len($width, "auto")};
  height: auto;
  opacity: ${({ $opacity }) => $opacity ?? 1};
  pointer-events: none;
  filter: drop-shadow(0 0 0 transparent);
  transition:
    filter 0.2s ease,
    opacity 0.2s ease;
`;

const LinkCard = styled.a<LinkCardProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  gap: 48px;
  padding: 16px;
  border-radius: 8px;
  border: ${({ theme }) => theme.styles.border()};
  background-color: ${({ theme }) => theme.color.background.page};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  cursor: pointer;
  /* clip image overflow on all sides at the card edge,
     and prevent the abs-positioned image from extending the layout box */
  overflow: hidden;
  &:hover {
    border-color: ${({ $color, theme }) =>
      $color || theme.color.text.secondary.main};
    background-color: ${({ $color, theme }) =>
      `color-mix(in srgb, ${$color || theme.color.text.secondary.main} 10%, ${theme.color.background.page})`};
    ${LinkBg} {
      filter: drop-shadow(
        0 0 8px
          ${({ $color, theme }) =>
            transparentize(0.7, $color || theme.color.text.secondary.main)}
      );
    }
  }
`;

const LinkCardTopRow = styled.span`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 1;
`;

const LinkIconContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const LinkCaption = styled.span`
  font-weight: 600;
`;

const LinkSubtitle = styled.span`
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const LinkDescription = styled.span`
  font-size: 0.9em;
  color: ${({ theme }) => theme.color.text.secondary.main};
`;

const LinkCardBottomArea = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  flex: 1;
  position: relative;
  z-index: 1;
`;

const LinkCardBottomRow = styled.span`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5em;
  font-weight: 600;
`;

interface LinkRatingProps {
  $border?: string;
}

const asImage = (v: string) =>
  /^(linear|radial|conic)-gradient/i.test(v.trim())
    ? v
    : `linear-gradient(${v}, ${v})`;

const LinkRating = styled.span<LinkRatingProps>`
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border: 2px solid transparent;
  border-radius: 9999px;
  font-size: 0.85em;
  font-weight: 700;
  font-feature-settings: "tnum";
  color: ${({ theme }) => theme.color.text.primary.main};
  background:
    linear-gradient(
        ${({ theme }) => theme.color.background.page},
        ${({ theme }) => theme.color.background.page}
      )
      padding-box,
    ${({ $border, theme }) => asImage($border || theme.color.text.primary.main)}
      border-box;
  pointer-events: none;
`;

export const GameIcon = styled.img`
  height: 24px;
  width: 24px;
  vertical-align: middle;
`;

interface GameLinkItemProps {
  color?: string;
  icon: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  href: string;
  caption: ReactNode;
  description?: ReactNode;
  src?: string;
  bgWidth?: string | number;
  bgTop?: string | number;
  bgRight?: string | number;
  bgOpacity?: number;
  rating?: ReactNode;
  ratingBorder?: string;
}

export const GameLinkItem = ({
  color,
  icon,
  title,
  subtitle,
  href,
  caption,
  description,
  src,
  bgWidth,
  bgTop,
  bgRight,
  bgOpacity,
  rating,
  ratingBorder = color,
}: GameLinkItemProps) => {
  return (
    <LinkCard
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      $color={color}
    >
      {src && (
        <LinkBg
          src={src}
          alt=""
          $width={bgWidth}
          $top={bgTop}
          $right={bgRight}
          $opacity={bgOpacity}
        />
      )}
      <LinkCardTopRow>
        <LinkIconContainer style={{ color }}>{icon}</LinkIconContainer>
        <LinkCaption>{title}</LinkCaption>
        <LinkSubtitle>{subtitle}</LinkSubtitle>
      </LinkCardTopRow>
      <LinkCardBottomArea>
        {description && <LinkDescription>{description}</LinkDescription>}
        <LinkCardBottomRow>
          {caption}
          <IconExternalLink />
        </LinkCardBottomRow>
      </LinkCardBottomArea>
      {rating !== undefined && (
        <LinkRating $border={ratingBorder}>{rating}</LinkRating>
      )}
    </LinkCard>
  );
};
