"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { SolvedGlobalStyles, solvedThemes } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";
import { IntersectionObserverProvider } from "../contexts/IntersectionObserverContext";
import useTranslation from "../hooks/useTranslation";

const THEME = solvedThemes.light;

const KOREAN_FONTS = `"Pretendard","Inter","Noto Sans JP",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple string Emoji","Segoe UI Emoji","Segoe UI Symbol"`;
const ENGLISH_FONTS = `"Inter","Pretendard","Noto Sans JP",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple string Emoji","Segoe UI Emoji","Segoe UI Symbol"`;

export const Providers = ({ children }: PropsWithChildren) => {
  const { lang } = useTranslation();

  return (
    <ThemeProvider theme={{ ...THEME, lang }}>
      <SolvedGlobalStyles />
      <Global
        styles={{
          html: {
            fontFamily: lang === "ko" ? KOREAN_FONTS : ENGLISH_FONTS,
            fontSize: 14,
            lineHeight: lang === "ko" ? 1.6 : 1.4,
          },
          ".tabler-icon": {
            width: "1.2em",
            height: "1.2em",
            verticalAlign: "middle",
          },
        }}
      />
      <IntersectionObserverProvider>{children}</IntersectionObserverProvider>
    </ThemeProvider>
  );
};
