import { IconCopy } from "@tabler/icons-react";

const KO = {
  link: "링크",
  profile: "프로필",
  game: "게임",
  disclaimer_shiftpsh:
    "‘shiftpsh’ 아이디를 사용하더라도 이 목록에 없는 경우, 제 프로필 또는 계정이 아닐 가능성이 있습니다. 확실하지 않다면 문의해 주세요.",
  links: "대표 연락처/링크",
  links_all: {
    caption: "모든 연락처/링크",
    disclaimer: "연락을 확인하지 못할 수도 있습니다.",
  },
  sites_services: "사이트/서비스",
  sns: "SNS/프로필",
  programming_tech: "프로그래밍/기술",
  competitive_programming: "경쟁 프로그래밍/알고리즘 문제해결",
  graphic_design: "디자인",
  site: {
    email_me: "이메일 (개인)",
    email_shift: "이메일 (solved.ac)",
    blog: "블로그",
    tools: "도구 모음",
  },
  games: {
    copy_uid: (
      <>
        복사 <IconCopy /> 아이콘을 눌러 친구 코드, UID 등을 복사할 수 있습니다.
      </>
    ),
    uid_copied: "UID를 복사했습니다.",
    caption: "주력 게임",
    jyantama: {
      title: "작혼: 리치 마작",
      server: "한국/글로벌 서버",
    },
    maplestory: {
      title: "메이플스토리",
      server: "오로라",
      class: "아크",
    },
  },
  games_all: {
    caption: "아이디가 있는 게임",
    description: "생각나는 대로 업데이트 예정입니다.",
  },
};

const EN = {
  link: "Links",
  profile: "Profile",
  game: "Game",
  disclaimer_shiftpsh:
    "Even if the handle ‘shiftpsh’ is used, if it is not in this list, it may not be my profile or account. If you are not sure, please contact me.",
  links: "Contact Links",
  links_all: {
    caption: "All Contact Links",
    disclaimer: "I may be unable to respond to messages.",
  },
  sites_services: "Sites/Services",
  sns: "SNS/Profile",
  programming_tech: "Programming/Technology",
  competitive_programming: "Competitive Programming",
  graphic_design: "Graphic Design",
  site: {
    email_me: "Email (Personal)",
    email_shift: "Email (solved.ac)",
    blog: "Blog",
    tools: "Tools",
  },
  games: {
    copy_uid: (
      <>
        Click the <IconCopy /> icon to copy friend codes, UIDs, etc.
      </>
    ),
    uid_copied: "Copied UID.",
    caption: "Main Games",
    jyantama: {
      title: "Mahjong Soul",
      server: "Global Server",
    },
    maplestory: {
      title: "MapleStory",
      server: "Aurora",
      class: "Ark",
    },
  },
  games_all: {
    caption: "Games with Accounts",
    description: "Will be updated as I remember.",
  },
};

export const translations = {
  ko: KO,
  en: EN,
};
