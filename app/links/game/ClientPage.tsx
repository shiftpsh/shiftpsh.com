"use client";

import { Divider, Space, Typo } from "@solved-ac/ui-react";
import { IconBrandSteam, IconCopy } from "@tabler/icons-react";
import { GameDynamicProfile } from "../../../dynamicProfile/loadGames";
import { GameIcon, LinkItem } from "../LinkItem";
import { Links } from "../Links";
import LinkItemJyantama from "./(external)/LinkItemJyantama";
import LinkItemMaimai from "./(external)/LinkItemMaimai";
import useTranslation from "../../../hooks/useTranslation";
import { translations } from "../translations";

const Page = ({ profile }: { profile: GameDynamicProfile }) => {
  const { t } = useTranslation(translations);
  const { jyantama3, jyantama4, maimai } = profile;

  return (
    <>
      <Typo h2>{t.games.caption}</Typo>
      <Typo description>{t.games.copy_uid}</Typo>
      <Space h="1em" />
      <Links>
        <LinkItem
          icon={<IconBrandSteam />}
          caption="Steam"
          description="shiftpsh"
          href="https://steamcommunity.com/id/shiftpsh"
          color="#00adee"
        />
        <LinkItemMaimai maimai={maimai} />
        <LinkItemJyantama jyantama3={jyantama3} jyantama4={jyantama4} />
        <LinkItem
          icon={<GameIcon src="/img/games/maple-48px.png" />}
          caption={
            <>
              {t.games.maplestory.title}
              <br />
              <Typo description small>
                KMS
              </Typo>
            </>
          }
          description={
            <>
              싶프트{" "}
              <Typo description>(Lv.285 {t.games.maplestory.class})</Typo>
              <br />
              <Typo readable small>
                {t.games.maplestory.server}
              </Typo>
            </>
          }
          href="https://maple.gg/u/%EC%8B%B6%ED%94%84%ED%8A%B8"
          color="#ff9d00"
        />
      </Links>
      <Divider />
      <Typo h2>{t.games_all.caption}</Typo>
      <Typo description>{t.games_all.description}</Typo>
    </>
  );
};

export default Page;
