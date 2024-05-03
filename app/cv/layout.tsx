"use client";

import { Space, Tab, Tabs, Typo } from "@solved-ac/ui-react";
import MainContainer from "../../components/MainContainer";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <MainContainer>
      <Space h={160} />
      <Typo h1>이력</Typo>
      <Tabs fullWidth>
        <Link href="/cv" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/cv/"}>
            기본
          </Tab>
        </Link>
        <Link href="/cv/competitive" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/cv/competitive/"}>
            대회 참가
          </Tab>
        </Link>
        <Link href="/cv/problemsetting" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/cv/problemsetting/"}>
            대회 출제
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
