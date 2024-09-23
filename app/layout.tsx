import React from "react";

/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import { Metadata, Viewport } from "next";
import { Providers } from "./Providers";
import ClientLayout from "./ClientLayout";

const APP_TITLE = "shiftpsh";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="//cloud.typography.com/6794156/6837792/css/fonts.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shiftpsh.com"),
  title: {
    template: `%s | ${APP_TITLE}`,
    default: APP_TITLE,
  },
  description: "Suhyun Park - Software Engineer · Graphic Designer",
  keywords: [
    "Suhyun Park",
    "shiftpsh",
    "solved.ac",
    "Software Engineer",
    "Graphic Designer",
    "서강대학교",
    "박수현",
    "솔브드",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "shiftpsh - Suhyun Park",
    siteName: "shiftpsh",
    description: "Suhyun Park - Software Engineer · Graphic Designer",
    url: "https://shiftpsh.com",
    images: "https://shiftpsh.com/og.png",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
};

export default RootLayout;
