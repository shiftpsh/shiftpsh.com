import styled from "@emotion/styled";
import Link from "next/link";
import { Frontmatter } from "../../utils/post";
import { Typo } from "@solved-ac/ui-react";

const GalleryGrid = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  @media (max-width: 1920px) {
    grid-template-columns: repeat(4, 1fr); /* 240px - 480px */
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr); /* 180px - 320px */
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr); /* 0px - 270px */
  }
`;

const GalleryItem = styled.li`
  aspect-ratio: 1;
`;

const GalleryImage = styled.span`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GalleryItemLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & .gallery-image {
    transition: transform 0.2s;
  }
  & .gallery-title {
    transition: opacity 0.2s;
  }
  & .gallery-border {
    transition: opacity 0.2s;
  }

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
`;

const GalleryItemHoverBorder = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 4px solid white;
  opacity: 0;
`;

interface Props {
  prefix: string;
  items: Frontmatter[];
}

const Gallery = ({ prefix, items }: Props) => {
  return (
    <GalleryGrid>
      {items.map((item) => (
        <GalleryItem key={item.slug}>
          <GalleryItemLink
            href={`${prefix}/${item.slug
              .replace(/^\//, "")
              .replace(/\/$/, "")}/`}
          >
            <GalleryImage
              style={{
                backgroundImage: `url(${item.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="gallery-image"
            />
            <GalleryItemTitle className="gallery-title">
              <Typo ellipsis>{item.title}</Typo>
            </GalleryItemTitle>
            <GalleryItemHoverBorder className="gallery-border" />
          </GalleryItemLink>
        </GalleryItem>
      ))}
    </GalleryGrid>
  );
};

export default Gallery;
