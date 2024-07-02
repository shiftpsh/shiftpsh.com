import styled from "@emotion/styled";
import { Frontmatter } from "../../utils/post";
import GalleryImageLink from "./GalleryImageLink";

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

interface Props {
  prefix: string;
  items: Frontmatter[];
}

const Gallery = ({ prefix, items }: Props) => {
  return (
    <GalleryGrid>
      {items.map((item) => (
        <GalleryImageLink prefix={prefix} item={item} key={item.slug} />
      ))}
    </GalleryGrid>
  );
};

export default Gallery;
