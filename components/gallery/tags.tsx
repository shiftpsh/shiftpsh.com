import { Typo } from "@solved-ac/ui-react";

export interface TagData {
  src?: string;
  href?: string;
  aliases?: string[];
  render?: string | JSX.Element;
}

export interface Tag extends TagData {
  key: string;
}

export const TAGS: {
  [key: string]: TagData;
} = {
  /**
   * Authors
   */
  "author:shiftpsh": {
    render: (
      <>
        shiftpsh{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    href: "/",
    src: "/tag/author-shiftpsh.png",
    aliases: ["시프트"],
  },
  "author:havana723": {
    render: (
      <>
        havana723{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    href: "https://twitter.com/havana723_",
    src: "/tag/author-havana723.png",
    aliases: ["아바나", "하바나"],
  },
  "author:suisou610": {
    render: (
      <>
        すいそう{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    href: "https://twitter.com/suisou610",
    src: "/tag/author-suisou610.png",
    aliases: ["수조", "すいそう"],
  },
  "author:merryu": {
    render: (
      <>
        MerryU{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    aliases: ["메리유"],
  },
  "author:im_rhrl": {
    render: (
      <>
        하고기{" "}
        <Typo description small>
          작가
        </Typo>
      </>
    ),
    href: "https://twitter.com/im_rhrl",
    aliases: ["하고기"],
  },
  /**
   * Characters
   */
  "character:eunha": {
    render: (
      <>
        은하{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    src: "/tag/character-eunha.png",
    aliases: ["은하"],
  },
  "character:hina": {
    render: (
      <>
        히나{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    src: "/tag/character-hina.png",
    aliases: ["히나"],
  },
  "character:semia": {
    render: (
      <>
        세미아{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    aliases: ["세미아"],
  },
  "character:imos": {
    render: (
      <>
        いもす{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    src: "/tag/character-imos.png",
    aliases: ["이모스", "いもす"],
  },
  "solvedac-background": {
    render: "solved.ac 배경",
    aliases: ["솔브드", "배경", "프로필"],
  },
  "kakao-emoticon": {
    render: "카카오 이모티콘",
    aliases: ["카카오", "이모티콘", "카톡"],
  },
};

export const getTag = (key: string): Tag => {
  const tag = TAGS[key] || {
    render: key,
  };

  return {
    key,
    ...tag,
  };
};
