import { PropsWithChildren } from "react";
import { TagProps } from "./Tag";
import { Typo } from "@solved-ac/ui-react";

export const TAGS: {
  [key: string]: PropsWithChildren<TagProps>;
} = {
  /**
   * Authors
   */
  "author:shiftpsh": {
    children: (
      <>
        shiftpsh{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    href: "/",
    src: "/tag/author-shiftpsh.png",
  },
  "author:havana723": {
    children: (
      <>
        havana723{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    href: "https://twitter.com/havana723_",
    src: "/tag/author-havana723.png",
  },
  "author:merryu": {
    children: (
      <>
        MerryU{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
  },
  "author:im_rhrl": {
    children: (
      <>
        하고기{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    href: "https://twitter.com/im_rhrl",
  },
  /**
   * Characters
   */
  "character:eunha": {
    children: (
      <>
        은하{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    src: "/tag/character-eunha.png",
  },
  "character:hina": {
    children: (
      <>
        히나{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    src: "/tag/character-hina.png",
  },
  "character:semia": {
    children: (
      <>
        세미아{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
  },
  "character:imos": {
    children: (
      <>
        いもす{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    src: "/tag/character-imos.png",
  },
  "solvedac-background": {
    children: "solved.ac 배경",
  },
};

export const getTag = (key: string): TagProps => {
  return (
    TAGS[key] || {
      children: key,
    }
  );
};
