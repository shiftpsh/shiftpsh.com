"use client";

import { Divider, Space, Typo } from "@solved-ac/ui-react";
import { IconBrandSteam, IconSwords } from "@tabler/icons-react";
import { GameDynamicProfile } from "../../../dynamicProfile/loadGames";
import useTranslation from "../../../hooks/useTranslation";
import { GameLinkItem } from "../GameLinkItem";
import { GameIcon } from "../LinkItem";
import { GameLinks } from "../Links";
import { translations } from "../translations";
import LinkItemJyantama from "./(external)/LinkItemJyantama";
import LinkItemMaimai from "./(external)/LinkItemMaimai";

const Page = ({ profile }: { profile: GameDynamicProfile }) => {
  const { t } = useTranslation(translations);
  const { jyantama3, jyantama4, maimai } = profile;

  return (
    <>
      <Typo h2>{t.games.caption}</Typo>
      <Space h="1em" />
      <GameLinks>
        <GameLinkItem
          icon={<IconBrandSteam />}
          title="Steam"
          href="https://steamcommunity.com/id/shiftpsh"
          color="#00adee"
          caption="shiftpsh"
        />
        <LinkItemMaimai maimai={maimai} />
        <GameLinkItem
          icon={<GameIcon src="/img/games/mobinogi-48px.png" />}
          title={t.games.mobinogi.title}
          subtitle={t.games.mobinogi.region}
          caption="싶프트"
          description={t.games.mobinogi.server}
          href="https://mabimobi.life/c/%EB%A9%94%EC%9D%B4%EB%B8%90/%EC%8B%B6%ED%94%84%ED%8A%B8"
          src="/img/games/bg/mobinogi.png"
          bgWidth={160}
          bgTop={-40}
          bgRight={15}
          rating={
            <>
              <IconSwords /> 61,397
            </>
          }
          color="#211f1e"
          ratingBorder="#c43f4d"
        />
        <GameLinkItem
          icon={<GameIcon src="/img/games/maple-48px.png" />}
          title={t.games.maplestory.title}
          subtitle="KMS"
          caption="싶프트"
          description={t.games.maplestory.server}
          href="https://maplescouter.com/ko/info?name=%EC%8B%B6%ED%94%84%ED%8A%B8"
          src="/img/games/bg/maple.png"
          bgWidth={280}
          bgTop={-80}
          bgRight={-50}
          rating={`Lv.287 ${t.games.maplestory.class}`}
          color="#ff9d00"
        />
        <GameLinkItem
          icon={<GameIcon src="/img/games/ongeki-48px.png" />}
          title="ONGEKI"
          subtitle={t.games.ongeki.region}
          caption="ｓｈｉｆｔ＊"
          description="7060319726985"
          href="https://ongeki-score.net/user/15820"
          src="/img/games/bg/akari.png"
          bgWidth={160}
          bgTop={0}
          bgRight={0}
          rating="18.789"
          color="#ff9bb3"
          ratingBorder="linear-gradient(135deg, #ffe387 28%,#fff8c9 50%,#ffce68 51%,#fff8c9 80%)"
        />
        <LinkItemJyantama jyantama3={jyantama3} jyantama4={jyantama4} />
      </GameLinks>
      <Divider />
      <Typo h2>{t.games_all.caption}</Typo>
      <Typo description>{t.games_all.description}</Typo>
    </>
  );
};

export default Page;
