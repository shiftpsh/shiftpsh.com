"use client";

import { Cell, Row, Typo } from "@solved-ac/ui-react";
import { IconStar, IconTrophy } from "@tabler/icons-react";
import { ReactNode } from "react";
import ExternalLinkInline from "../../../../components/ExternalLinkInline";
import { formatNumber } from "../../../../utils/formatNumber";

export interface UCPCRowData {
  year: string;
  phase: "PRELIMINARY" | "FINALS";
  contest: string;
  contestLink: string;
  team: ReactNode;
  rank: number;
  totalTeams: number;
  score: number;
  penalty: number;
  firstToSolve?: string[];
  award?: string;
}

interface Props {
  data: UCPCRowData;
}

const UCPCRow = ({ data }: Props) => {
  const {
    year,
    phase,
    contest,
    contestLink,
    team,
    rank,
    totalTeams,
    score,
    penalty,
    firstToSolve = [],
    award,
  } = data;

  const hasFirstToSolve = firstToSolve.length > 0;

  const style = {
    fontWeight: phase === "FINALS" ? "bold" : "normal",
  };

  const rowSpan = 1 + (hasFirstToSolve ? 1 : 0) + (award ? 1 : 0);

  return (
    <>
      <Row>
        <Cell rowSpan={rowSpan}>
          <Typo tabular>{year}</Typo>
        </Cell>
        <Cell style={style} rowSpan={rowSpan}>
          {phase === "PRELIMINARY" && "예선"}
          {phase === "FINALS" && "본선"}
        </Cell>
        <Cell>
          <ExternalLinkInline href={contestLink} style={style}>
            {contest}
          </ExternalLinkInline>
          <br />
          <Typo description>{team}</Typo>
        </Cell>
        <Cell>
          <Typo tabular>
            #{formatNumber(rank)}/{formatNumber(totalTeams)}{" "}
            <Typo description>
              (
              {((rank / totalTeams) * 100).toLocaleString(undefined, {
                maximumFractionDigits: 1,
                minimumFractionDigits: 1,
              })}
              %)
            </Typo>
            <br />={score}({penalty})
          </Typo>
        </Cell>
      </Row>
      {award && (
        <Row>
          <Cell colSpan={2}>
            <Typo warn>
              <IconTrophy /> <b>{award}</b>
            </Typo>
          </Cell>
        </Row>
      )}
      {hasFirstToSolve && (
        <Row>
          <Cell colSpan={2}>
            <Typo warn>
              <IconStar /> <b>First to Solve</b>
            </Typo>{" "}
            {firstToSolve.map((problem, index) => (
              <Typo key={index} description>
                {problem}
                {index + 1 < firstToSolve.length && ", "}
              </Typo>
            ))}
          </Cell>
        </Row>
      )}
    </>
  );
};

export default UCPCRow;
