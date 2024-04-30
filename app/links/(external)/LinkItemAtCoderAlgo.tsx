import { Typo } from "@solved-ac/ui-react";
import { IconChartBar, IconHorse } from "@tabler/icons-react";
import {
  AtcoderAlgoResponse,
  CodeforcesResponse,
} from "../../../dynamicProfile/loaders";
import { formatNumber } from "../../../utils/formatNumber";
import { LinkItem } from "../LinkItem";

const LinkItemAtCoderAlgo = ({
  atcoderAlgo,
}: {
  atcoderAlgo: AtcoderAlgoResponse | null;
}) => {
  return (
    <LinkItem
      icon={<IconHorse />}
      caption="AtCoder (Algorithm)"
      description={
        atcoderAlgo ? (
          <>
            <span
              style={{
                color: atcoderAlgo.ratingColor,
              }}
            >
              shiftpsh
            </span>{" "}
            <Typo description tabular>
              ({formatNumber(atcoderAlgo.maxRating)})
            </Typo>
          </>
        ) : (
          `shiftpsh`
        )
      }
      href="https://atcoder.jp/users/shiftpsh?contestType=algo&lang=en"
      color={atcoderAlgo ? atcoderAlgo.ratingColor : "#000000"}
    />
  );
};

export default LinkItemAtCoderAlgo;
