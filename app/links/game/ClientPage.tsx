"use client";

import { Divider, Space, Typo } from "@solved-ac/ui-react";
import { IconBrandSteam, IconCopy } from "@tabler/icons-react";
import { GameDynamicProfile } from "../../../dynamicProfile/loadGames";
import { CopyLinkItem, GameIcon, LinkItem } from "../LinkItem";
import { Links } from "../Links";
import LinkItemJyantama from "./(external)/LinkItemJyantama";

const Page = ({ profile }: { profile: GameDynamicProfile }) => {
  const { jyantama3, jyantama4 } = profile;

  return (
    <>
      <Typo h2>주력 게임</Typo>
      <Typo description>
        <IconCopy /> 버튼을 눌러 친구 코드, UID 등을 복사할 수 있습니다.
      </Typo>
      <Space h="1em" />
      <Links>
        <LinkItem
          icon={<IconBrandSteam />}
          caption="Steam"
          description="shiftpsh"
          href="https://steamcommunity.com/id/shiftpsh"
          color="#00adee"
        />
        <CopyLinkItem
          icon={<GameIcon src="/img/games/maimai-48px.png" />}
          caption={
            <>
              maimai DX
              <br />
              <Typo description small>
                BUDDiES &middot; Intl. ver.
              </Typo>
            </>
          }
          description={
            <>
              ｓｏｌｖｅｄａｃ{" "}
              <Typo description tabular>
                (15,620)
              </Typo>
              <br />
              <Typo readable small>
                7061399728945
              </Typo>
            </>
          }
          copyText="7061399728945"
          copyTextMessage="친구 코드를 복사했습니다."
          color="#42bbcd"
        />
        <LinkItemJyantama jyantama3={jyantama3} jyantama4={jyantama4} />
        <LinkItem
          icon={<GameIcon src="/img/games/maple-48px.png" />}
          caption={
            <>
              메이플스토리
              <br />
              <Typo description small>
                KMS
              </Typo>
            </>
          }
          description={
            <>
              싶프트 <Typo description>(Lv.271 아크)</Typo>
              <br />
              <Typo readable small>
                오로라
              </Typo>
            </>
          }
          href="https://maple.gg/u/%EC%8B%B6%ED%94%84%ED%8A%B8"
          color="#ff9d00"
        />
      </Links>
      <Divider />
      <Typo h2>아이디가 있는 게임</Typo>
      <Typo description>생각나는 대로 업데이트 예정입니다.</Typo>
    </>
  );
};

export default Page;
