"use client";

import { Cell, Row, Typo } from "@solved-ac/ui-react";
import { IconArrowUp, IconStar, IconTrophy } from "@tabler/icons-react";
import ExternalLinkInline from "../../../../components/ExternalLinkInline";
import { formatNumber } from "../../../../utils/formatNumber";

export interface CodejamRowData {
  year: string;
  phase:
    | "QUALIFICATION"
    | "ROUND_1A"
    | "ROUND_1B"
    | "ROUND_1C"
    | "ROUND_2"
    | "ROUND_3"
    | "WORLD_FINAL";
  rank: number;
  totalContestants: number;
  score: number;
  advanced?: boolean;
}

interface Props {
  data: CodejamRowData;
}

const CodejamRow = ({ data }: Props) => {
  const { year, phase, rank, totalContestants, score, advanced } = data;

  const style = {
    fontWeight:
      phase === "ROUND_3" || phase === "WORLD_FINAL" ? "bold" : "normal",
  };

  const rowSpan = 1 + (advanced ? 1 : 0);

  const contestName = (
    <>
      {phase === "QUALIFICATION" && "Qualification"}
      {phase === "ROUND_1A" && "Round 1A"}
      {phase === "ROUND_1B" && "Round 1B"}
      {phase === "ROUND_1C" && "Round 1C"}
      {phase === "ROUND_2" && "Round 2"}
      {phase === "ROUND_3" && "Round 3"}
      {phase === "WORLD_FINAL" && "World Finals"}
    </>
  );

  return (
    <>
      <Row>
        <Cell rowSpan={rowSpan}>
          <Typo tabular>{year}</Typo>
        </Cell>
        <Cell style={style} rowSpan={rowSpan}>
          {contestName}
        </Cell>
        <Cell>
          <span style={style}>
            {contestName} {year}
          </span>
          <br />
          <Typo description>shiftpsh</Typo>
        </Cell>
        <Cell>
          <Typo tabular>
            #{formatNumber(rank)}/{formatNumber(totalContestants)}{" "}
            <Typo description>
              (
              {((rank / totalContestants) * 100).toLocaleString(undefined, {
                maximumFractionDigits: 1,
                minimumFractionDigits: 1,
              })}
              %)
            </Typo>
            <br />={score}
          </Typo>
        </Cell>
      </Row>
      {advanced && (
        <Row>
          <Cell colSpan={2}>
            <Typo progress>
              <IconArrowUp /> <b>Advanced</b>
            </Typo>
          </Cell>
        </Row>
      )}
    </>
  );
};

export default CodejamRow;
