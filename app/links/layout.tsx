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
      <Typo h1>링크</Typo>
      <Tabs fullWidth>
        <Link href="/links" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/links"}>
            프로필
          </Tab>
        </Link>
        <Link href="/links/game" passHref legacyBehavior>
          <Tab as="a" current={pathname === "/links/game"}>
            게임
          </Tab>
        </Link>
      </Tabs>
      <Space h={32} />
      {children}
      <Space h={64} />
      <Typo description>
        'shiftpsh' 아이디를 사용하더라도 이 목록에 없는 경우, 제 프로필 또는
        계정이 아닐 가능성이 있습니다. 확실하지 않다면 문의해 주세요.
      </Typo>
      <Space h={160} />
    </MainContainer>
  );
};

export default Layout;
