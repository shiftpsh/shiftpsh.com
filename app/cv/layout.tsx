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
      <Typo h1>{t.cv}</Typo>
      <Tabs fullWidth>
        <Link href="/cv" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/cv/"}>
            {t.overview}
          </Tab>
        </Link>
        <Link href="/cv/competitive" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/cv/competitive/"}>
            {t.competitive}
          </Tab>
        </Link>
        <Link href="/cv/problemsetting" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/cv/problemsetting/"}>
            {t.problemsetting}
          </Tab>
        </Link>
      </Tabs>
      <Space h={32} />
      {children}
      <Space h={160} />
    </MainContainer>
  );
};

export default Layout;
