import {
  Jyantama3Response,
  Jyantama4Response,
} from "../../../../dynamicProfile/loaders";
import useTranslation from "../../../../hooks/useTranslation";
import { GameLinkItem } from "../../GameLinkItem";
import { GameIcon } from "../../LinkItem";
import { translations } from "../../translations";

const LinkItemJyantama = ({
  jyantama3,
  jyantama4,
}: {
  jyantama3: Jyantama3Response | null;
  jyantama4: Jyantama4Response | null;
}) => {
  const { t, lang } = useTranslation(translations);
  const higherRatingData =
    (jyantama3?.levelNumber || 0) > (jyantama4?.levelNumber || 0)
      ? jyantama3
      : jyantama4;

  return (
    <GameLinkItem
      icon={<GameIcon src="/img/games/jyantama-48px.png" />}
      title={t.games.jyantama.title}
      subtitle={t.games.jyantama.server}
      caption="shiftpsh"
      rating={
        higherRatingData ? (
          <>
            ◇{jyantama4?.levelTitle?.[lang] || "???"}/▽
            {jyantama3?.levelTitle?.[lang] || "???"}
          </>
        ) : null
      }
      description="80149226"
      href="https://ikeda.sapk.ch/player/118354342/24"
      src="/img/games/bg/1hime.png"
      bgWidth={280}
      bgTop={-80}
      bgRight={-50}
      color={higherRatingData ? higherRatingData.levelColor : "#cd3b40"}
      ratingBorder={higherRatingData ? higherRatingData.levelColor : "#cd3b40"}
    />
  );
};

export default LinkItemJyantama;
