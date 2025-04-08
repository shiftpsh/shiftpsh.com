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

const Author = ({ name }: { name: string }) => (
  <>
    {name}{" "}
    <Typo description small>
      작가
    </Typo>
  </>
);

const Character = ({ name }: { name: string }) => (
  <>
    {name}{" "}
    <Typo description small>
      캐릭터
    </Typo>
  </>
);

export const TAGS: {
  [key: string]: TagData;
} = {
  /**
   * Authors
   */
  "author:shiftpsh": {
    render: <Author name="shiftpsh" />,
    href: "/",
    src: "/tag/author-shiftpsh.png",
    aliases: ["시프트"],
  },
  "author:havana723": {
    render: <Author name="havana723" />,
    href: "https://twitter.com/havana723_",
    src: "/tag/author-havana723.png",
    aliases: ["아바나", "하바나"],
  },
  "author:suisou610": {
    render: <Author name="すいそう" />,
    href: "https://twitter.com/suisou610",
    src: "/tag/author-suisou610.png",
    aliases: ["수조", "すいそう"],
  },
  "author:merryu": {
    render: <Author name="MerryU" />,
    aliases: ["메리유"],
  },
  "author:im_rhrl": {
    render: <Author name="하고기" />,
    href: "https://twitter.com/im_rhrl",
    aliases: ["하고기"],
  },
  "author:sun3_cm": {
    render: <Author name="해삼" />,
    href: "https://twitter.com/sun3_cm",
    aliases: ["해삼"],
  },
  /**
   * Characters
   */
  "character:eunha": {
    render: <Character name="은하" />,
    src: "/tag/character-eunha.png",
    aliases: ["은하", "havana723"],
  },
  "character:hina": {
    render: <Character name="히나" />,
    src: "/tag/character-hina.png",
    aliases: ["히나", "havana723"],
  },
  "character:semia": {
    render: <Character name="세미아" />,
    aliases: ["세미아"],
  },
  "character:imos": {
    render: <Character name="いもす" />,
    src: "/tag/character-imos.png",
    aliases: ["이모스", "いもす"],
  },
  "character:bom": {
    render: <Character name="봄" />,
    src: "/tag/character-bom.png",
    aliases: ["gs18115"],
  },
  "character:hyea": {
    render: <Character name="혜아" />,
    src: "/tag/character-hyea.png",
    aliases: ["hyea"],
  },
  "character:solvedac-bronze": {
    render: <Character name="브론즈" />,
    src: "/tag/character-solvedac-bronze.jpg",
  },
  "character:solvedac-silver": {
    render: <Character name="실버" />,
    src: "/tag/character-solvedac-silver.jpg",
  },
  "character:solvedac-gold": {
    render: <Character name="골드" />,
    src: "/tag/character-solvedac-gold.jpg",
  },
  "character:solvedac-platinum": {
    render: <Character name="플래티넘" />,
    src: "/tag/character-solvedac-platinum.jpg",
  },
  "character:solvedac-diamond": {
    render: <Character name="다이아몬드" />,
    src: "/tag/character-solvedac-diamond.jpg",
  },
  "character:solvedac-ruby": {
    render: <Character name="루비" />,
    src: "/tag/character-solvedac-ruby.jpg",
  },
  "character:solvedac-master": {
    render: <Character name="마스터" />,
    src: "/tag/character-solvedac-master.jpg",
  },
  "character:shifft": {
    render: (
      <>
        싶프트{" "}
        <Typo description small>
          캐릭터
        </Typo>
      </>
    ),
    src: "/tag/character-shifft.png",
    aliases: ["메이플"],
  },
  "solvedac-background": {
    render: "solved.ac 배경",
    aliases: ["솔브드", "배경", "프로필"],
  },
  "solvedac-badge": {
    render: "solved.ac 프로필 뱃지",
    aliases: ["솔브드", "프로필 뱃지", "프로필"],
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
