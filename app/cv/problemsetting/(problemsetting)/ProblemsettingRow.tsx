"use client";

import { Cell, Row, Typo } from "@solved-ac/ui-react";
import { IconCode, IconCookie } from "@tabler/icons-react";
import ExternalLinkInline from "../../../../components/ExternalLinkInline";

export interface ProblemsettingRowData {
  year: string;
  contest: string;
  contestLink: string;
  number: string;
  title: string;
  bold?: boolean;
  bojProblemId?: number;
  bikoProblemId?: number;
}

interface Props {
  data: ProblemsettingRowData;
}

const ProblemsettingRow = ({ data }: Props) => {
  const {
    year,
    contest,
    contestLink,
    number,
    title,
    bold,
    bojProblemId,
    bikoProblemId,
  } = data;

  const contestStyle = bold
    ? {
        fontWeight: "bold",
      }
    : undefined;

  return (
    <>
      <Row>
        <Cell>
          <Typo tabular>{year}</Typo>
        </Cell>
        <Cell>
          <ExternalLinkInline href={contestLink} style={contestStyle}>
            {contest}
          </ExternalLinkInline>
          <br />〈{title}〉<Typo description> &ndash; {number}</Typo>
        </Cell>
        <Cell>
          {bojProblemId && (
            <>
              <span style={{ color: "#2e9afe" }}>
                <IconCode />{" "}
                <b>
                  <ExternalLinkInline
                    href={`https://www.acmicpc.net/problem/${bojProblemId}`}
                  >
                    {bojProblemId}
                  </ExternalLinkInline>
                </b>
              </span>
              <br />
            </>
          )}
          {bikoProblemId && (
            <>
              <span style={{ color: "#fea72e" }}>
                <IconCookie />{" "}
                <b>
                  <ExternalLinkInline
                    href={`https://www.biko.kr/problem/${bojProblemId}`}
                  >
                    {bikoProblemId}
                  </ExternalLinkInline>
                </b>
              </span>
              <br />
            </>
          )}
        </Cell>
      </Row>
    </>
  );
};

export default ProblemsettingRow;
