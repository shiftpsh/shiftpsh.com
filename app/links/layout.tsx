"use client";

import { Space, Tab, Tabs, Typo } from "@solved-ac/ui-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import MainContainer from "../../components/MainContainer";
import useTranslation from "../../hooks/useTranslation";
import { translations } from "./translations";

const Layout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation(translations);
  const pathname = usePathname();

  return (
    <MainContainer>
      <Space h={160} />
      <Typo h1>{t.link}</Typo>
      <Tabs fullWidth>
        <Link href="/links" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/links/"}>
            {t.profile}
          </Tab>
        </Link>
        <Link href="/links/game" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/links/game/"}>
            {t.game}
          </Tab>
        </Link>
      </Tabs>
      <Space h={32} />
      {children}
      <Space h={64} />
      <Typo description>{t.disclaimer_shiftpsh}</Typo>
      <Space h={160} />
    </MainContainer>
  );
};

export default Layout;
