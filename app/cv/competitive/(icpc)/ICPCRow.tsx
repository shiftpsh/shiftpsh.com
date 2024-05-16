"use client";

import { Cell, Row, Typo } from "@solved-ac/ui-react";
import { IconStar, IconTrophy } from "@tabler/icons-react";
import ExternalLinkInline from "../../../../components/ExternalLinkInline";
import { formatNumber } from "../../../../utils/formatNumber";

export interface ICPCRowData {
  year: string;
  phase: "NATIONAL" | "REGIONAL" | "SUPERREGIONAL" | "FINALS";
  venue: string;
  contest: string;
  contestLink: string;
  team: string;
  rank: number;
  totalTeams: number;
  score: number;
  penalty: number;
  firstToSolve?: string[];
  award?: string;
}

interface Props {
  data: ICPCRowData;
}

const ICPCRow = ({ data }: Props) => {
  const {
    year,
    phase,
    venue,
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

  const style =
    phase === "SUPERREGIONAL" || phase === "FINALS"
      ? {
          fontWeight: "bold",
        }
      : undefined;

  const rowSpan = 1 + (hasFirstToSolve ? 1 : 0) + (award ? 1 : 0);

  return (
    <>
      <Row>
        <Cell rowSpan={rowSpan}>
          <Typo tabular>{year}</Typo>
        </Cell>
        <Cell style={style} rowSpan={rowSpan}>
          {phase === "NATIONAL" && "국내 예선"}
          {phase === "REGIONAL" && "리저널"}
          {phase === "SUPERREGIONAL" && "슈퍼리저널"}
          {phase === "FINALS" && "월드 파이널"}
        </Cell>
        <Cell style={style} rowSpan={rowSpan}>
          {venue}
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

export default ICPCRow;
