import { Typo } from "@solved-ac/ui-react";
import {
  Jyantama3Response,
  Jyantama4Response,
} from "../../../../dynamicProfile/loaders";
import useTranslation from "../../../../hooks/useTranslation";
import { CopyLinkItem, GameIcon } from "../../LinkItem";
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
    <CopyLinkItem
      icon={<GameIcon src="/img/games/jyantama-48px.png" />}
      caption={
        <>
          {t.games.jyantama.title}
          <br />
          <Typo description small>
            {t.games.jyantama.server}
          </Typo>
        </>
      }
      description={
        <>
          {higherRatingData ? (
            <>
              <span style={{ color: higherRatingData.levelColor }}>
                shiftpsh
              </span>{" "}
              <Typo description tabular>
                (◇
                {jyantama4?.levelTitle?.[lang] || "???"}/▽
                {jyantama3?.levelTitle?.[lang] || "???"})
              </Typo>
            </>
          ) : (
            "shiftpsh"
          )}
          <br />
          <Typo readable small>
            80149226
          </Typo>
        </>
      }
      copyText="80149226"
      copyTextMessage={t.games.uid_copied}
      color={higherRatingData ? higherRatingData.levelColor : "#cd3b40"}
    />
  );
};

export default LinkItemJyantama;
