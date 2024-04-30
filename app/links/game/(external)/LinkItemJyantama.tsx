import { Typo } from "@solved-ac/ui-react";
import {
  Jyantama3Response,
  Jyantama4Response,
} from "../../../../dynamicProfile/loaders";
import { CopyLinkItem, GameIcon } from "../../LinkItem";

const LinkItemJyantama = ({
  jyantama3,
  jyantama4,
}: {
  jyantama3: Jyantama3Response | null;
  jyantama4: Jyantama4Response | null;
}) => {
  const higherRatingData =
    (jyantama3?.levelNumber || 0) > (jyantama4?.levelNumber || 0)
      ? jyantama3
      : jyantama4;

  return (
    <CopyLinkItem
      icon={<GameIcon src="/img/games/jyantama-48px.png" />}
      caption={
        <>
          작혼: 리치 마작
          <br />
          <Typo description small>
            한국/글로벌 서버
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
                {jyantama4?.levelTitle || "???"}/▽
                {jyantama3?.levelTitle || "???"})
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
      copyTextMessage="UID를 복사했습니다."
      color={higherRatingData ? higherRatingData.levelColor : "#cd3b40"}
    />
  );
};

export default LinkItemJyantama;
