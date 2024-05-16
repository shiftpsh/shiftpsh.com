import { Typo } from "@solved-ac/ui-react";
import { IconChartBar, IconCheck } from "@tabler/icons-react";
import {
  CodeforcesResponse,
  SolvedacResponse,
} from "../../../dynamicProfile/loaders";
import { formatNumber } from "../../../utils/formatNumber";
import { LinkItem } from "../LinkItem";

const LinkItemSolvedac = ({
  solvedac,
}: {
  solvedac: SolvedacResponse | null;
}) => {
  return (
    <LinkItem
      icon={<IconCheck />}
      caption="solved.ac"
      description={
        solvedac ? (
          <>
            <span
              style={{
                color: solvedac.tierColor,
              }}
            >
              {solvedac.handle}
            </span>{" "}
            <Typo description tabular>
              ({formatNumber(solvedac.rating)})
            </Typo>
          </>
        ) : (
          `shiftpsh`
        )
      }
      href="https://solved.ac/profile/shiftpsh"
      color={solvedac ? solvedac.tierColor : "#17ce3a"}
    />
  );
};

export default LinkItemSolvedac;
