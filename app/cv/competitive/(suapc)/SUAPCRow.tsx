"use client";

import { Cell, Row, Typo } from "@solved-ac/ui-react";
import { IconStar, IconTrophy } from "@tabler/icons-react";
import ExternalLinkInline from "../../../../components/ExternalLinkInline";
import { formatNumber } from "../../../../utils/formatNumber";

export interface SUAPCRowData {
  year: string;
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
  data: SUAPCRowData;
}

const SUAPCRow = ({ data }: Props) => {
  const {
    year,
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

  const rowSpan = 1 + (hasFirstToSolve ? 1 : 0) + (award ? 1 : 0);

  return (
    <>
      <Row>
        <Cell rowSpan={rowSpan}>
          <Typo tabular>{year}</Typo>
        </Cell>
        <Cell>
          <ExternalLinkInline href={contestLink}>{contest}</ExternalLinkInline>
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

export default SUAPCRow;
