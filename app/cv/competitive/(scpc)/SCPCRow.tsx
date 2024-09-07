"use client";

import { Cell, Row, Typo } from "@solved-ac/ui-react";
import { IconArrowUp, IconStar, IconTrophy } from "@tabler/icons-react";
import ExternalLinkInline from "../../../../components/ExternalLinkInline";
import { formatNumber } from "../../../../utils/formatNumber";

export interface SCPCRowData {
  year: string;
  phase: "ROUND_1" | "ROUND_2" | "FINALS";
  score: number;
  advanced?: boolean;
  award?: string;
}

interface Props {
  data: SCPCRowData;
}

const SCPCRow = ({ data }: Props) => {
  const { year, phase, score, advanced, award } = data;

  const style = {
    fontWeight: phase === "FINALS" ? "bold" : "normal",
  };

  const rowSpan = 1 + (advanced ? 1 : 0) + (award ? 1 : 0);

  const contestName = (
    <>
      {phase === "ROUND_1" && "Round 1"}
      {phase === "ROUND_2" && "Round 2"}
      {phase === "FINALS" && "Finals"}
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
        </Cell>
        <Cell>
          <Typo tabular>={formatNumber(score)}</Typo>
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

export default SCPCRow;
