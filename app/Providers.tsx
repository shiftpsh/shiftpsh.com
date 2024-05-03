"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { SolvedGlobalStyles, solvedThemes } from "@solved-ac/ui-react";
import { PropsWithChildren } from "react";

const THEME = solvedThemes.light;

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={THEME}>
      <SolvedGlobalStyles />
      <Global
        styles={{
          html: {
            fontSize: "calc(12px + 0.7vmin)",
          },
          ".tabler-icon": {
            fontSize: "1.2em",
            verticalAlign: "middle",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};
