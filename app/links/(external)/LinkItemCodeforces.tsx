import { Typo } from "@solved-ac/ui-react";
import { IconChartBar } from "@tabler/icons-react";
import { CodeforcesResponse } from "../../../dynamicProfile/loaders";
import { formatNumber } from "../../../utils/formatNumber";
import { LinkItem } from "../LinkItem";

const LinkItemCodeforces = ({
  codeforces,
}: {
  codeforces: CodeforcesResponse | null;
}) => {
  return (
    <LinkItem
      icon={<IconChartBar />}
      caption="Codeforces"
      description={
        codeforces ? (
          <>
            <span
              style={{
                color: codeforces.ratingColor,
              }}
            >
              {codeforces.handle}
            </span>{" "}
            <Typo description tabular>
              ({formatNumber(codeforces.rating)})
            </Typo>
          </>
        ) : (
          `shiftpsh`
        )
      }
      href="https://codeforces.com/profile/shiftpsh"
      color={codeforces ? codeforces.ratingColor : "#1f8ac0"}
    />
  );
};

export default LinkItemCodeforces;
