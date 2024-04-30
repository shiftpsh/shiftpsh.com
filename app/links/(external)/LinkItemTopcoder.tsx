import { Typo } from "@solved-ac/ui-react";
import { IconBrackets } from "@tabler/icons-react";
import { TopcoderResponse } from "../../../dynamicProfile/loaders";
import { formatNumber } from "../../../utils/formatNumber";
import { LinkItem } from "../LinkItem";

const LinkItemTopcoder = ({
  topcoder,
}: {
  topcoder: TopcoderResponse | null;
}) => {
  return (
    <LinkItem
      icon={<IconBrackets />}
      caption="Topcoder"
      description={
        topcoder ? (
          <>
            <span
              style={{
                color: topcoder.maxRating.ratingColor,
              }}
            >
              {topcoder.handle}
            </span>{" "}
            <Typo description tabular>
              ({formatNumber(topcoder.maxRating.rating)})
            </Typo>
          </>
        ) : (
          `shiftpsh`
        )
      }
      href="https://www.topcoder.com/members/shiftpsh"
      color={topcoder ? topcoder.maxRating.ratingColor : "#27aae1"}
    />
  );
};

export default LinkItemTopcoder;
