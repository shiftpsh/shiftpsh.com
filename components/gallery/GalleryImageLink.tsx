"use client";

import styled from "@emotion/styled";
import { Typo } from "@solved-ac/ui-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../contexts/IntersectionObserverContext";
import { Frontmatter } from "../../utils/post";

const GalleryItem = styled.li`
  aspect-ratio: 1;
`;

const GalleryItemLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus {
    & .gallery-image {
      transform: scale(1.1);
    }
    & .gallery-title {
      opacity: 1;
    }
    & .gallery-border {
      opacity: 1;
    }
  }
`;

const GalleryItemTitle = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s;
`;

const GalleryItemHoverBorder = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
  transition: opacity 0.2s;
`;

const GalleryImageContainer = styled.span`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s, transform 0.2s;
`;

interface Props {
  prefix: string;
  item: Frontmatter;
}

const GalleryImageLink = ({ prefix, item }: Props) => {
  const { register, deregister } = useIntersectionObserver();
  const galleryItemRef = useRef<HTMLLIElement>(null);

  const [imageShown, setImageShown] = useState(false);

  useEffect(() => {
    if (!galleryItemRef.current) return;
    if (imageShown) return;
    register(galleryItemRef.current, (entry) => {
      if (entry.intersectionRatio > 0) {
        const image = new Image();
        image.onload = () => {
          setImageShown(true);
        };
        image.src = item.thumbnail;
      }
    });
    return () => {
      deregister();
    };
  }, [deregister, imageShown, item.thumbnail, register]);

  return (
    <GalleryItem ref={galleryItemRef}>
      <GalleryItemLink
        href={`${prefix}/${item.slug.replace(/^\//, "").replace(/\/$/, "")}/`}
      >
        <GalleryImageContainer
          style={{
            ...(imageShown && {
              backgroundImage: `url(${item.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }),
            // opacity, transform
            transitionDelay: `${Math.random() * 0.4}s, 0s`,
          }}
          className="gallery-image"
        />
        <GalleryItemTitle className="gallery-title">
          <Typo ellipsis>{item.title}</Typo>
        </GalleryItemTitle>
        <GalleryItemHoverBorder className="gallery-border" />
      </GalleryItemLink>
    </GalleryItem>
  );
};

export default GalleryImageLink;
