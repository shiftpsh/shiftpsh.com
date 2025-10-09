import { arch } from "os";

const KO = {
  downloads: "자료",
  logo_and_colors: {
    caption: "로고 및 색상",
    alt: "어두운 바탕과 가운데에 그려져 있는 shiftpsh 로고.",
    ai_screen: "AI (스크린용, 512KB)",
    ai_print: "AI (인쇄용, 2.2MB)",
    description:
      "키보드의 Shift 키를 상징하는 화살표와, ‘시프트’ 및 ‘수현’의 머리글자 초성 ‘ㅅ’을 형상화한 로고를 사용하고 있습니다.",
  },
  hanbyeol: {
    caption: "박한별",
    alt: "코랄색 바탕에 흰색 사선 스트라이프가 늘어져 있고, 그 위에 한별이가 그려져 있는 종이를 잘라 얹은 듯한 그림.",
    specs: "설정 문서 (577KB)",
    guidelines: "2차 창작 가이드라인",
    description:
      "박한별(한별이)은 인터넷 페르소나 캐릭터입니다. 2014년부터 shiftpsh의 인터넷 활동과 함께하고 있습니다.",
  },
  archive: {
    caption: "아카이브",
    items: {
      "2021": "shiftpsh.com (2021)",
      "2019": "shiftpsh.com (2019)",
      "2017": "shiftpsh.com (2017)",
      ed_7: "osu! 스킨 – SHIFTED 7: VIOLET CLARITY (2016)",
      ed_6: "osu! 스킨 – SHIFTED 6: EXPRESSIVE HARMONY (2015)",
      ed_5: "osu! 스킨 – shifted 5: snow dream (2014)",
    },
  },
};

const EN = {
  downloads: "Downloads",
  logo_and_colors: {
    caption: "Logo and Colors",
    alt: "shiftpsh logo on dark background with the logo drawn in the center.",
    ai_screen: "AI (for screen, 512KB)",
    ai_print: "AI (for print, 2.2MB)",
    description:
      "The logo symbolizes the Shift key on a keyboard and stylizes the initial consonant 'ㅅ' of 'shift' and 'Suhyun'.",
  },
  hanbyeol: {
    caption: "Hanbyeol",
    alt: "A picture that looks like a piece of paper with Hanbyeol drawn on it, laid on a coral background with white diagonal stripes.",
    specs: "Specs (577KB)",
    guidelines: "Creator Guidelines",
    description:
      "Hanbyeol is an internet persona character. She has been with shiftpsh's internet activities since 2014.",
  },
  archive: {
    caption: "Archive",
    items: {
      "2021": "shiftpsh.com (2021)",
      "2019": "shiftpsh.com (2019)",
      "2017": "shiftpsh.com (2017)",
      ed_7: "osu! Skin – SHIFTED 7: VIOLET CLARITY (2016)",
      ed_6: "osu! Skin – SHIFTED 6: EXPRESSIVE HARMONY (2015)",
      ed_5: "osu! Skin – shifted 5: snow dream (2014)",
    },
  },
};

export const translations = {
  ko: KO,
  en: EN,
};
