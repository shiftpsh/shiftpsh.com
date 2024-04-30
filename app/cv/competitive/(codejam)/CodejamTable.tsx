import {
  Cell,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Tooltip,
  Typo,
} from "@solved-ac/ui-react";
import { IconQuestionMark } from "@tabler/icons-react";
import CodejamData from "./CodejamData";
import CodejamRow from "./CodejamRow";

const CodejamTable = () => {
  return (
    <TableContainer>
      <Table
        fullWidth
        padding="dense"
        style={{
          minWidth: 600,
        }}
      >
        <TableHead>
          <Row>
            <Cell>연도</Cell>
            <Cell>단계</Cell>
            <Cell>대회</Cell>
            <Cell>
              <Tooltip title="#: 순위, =: 획득 점수">
                성적
                <Typo description>
                  <IconQuestionMark />
                </Typo>
              </Tooltip>
            </Cell>
          </Row>
        </TableHead>
        <TableBody>
          {CodejamData.filter(
            (x) => x.phase !== "QUALIFICATION" && !x.phase.match(/^ROUND_1/)
          ).map((data, index) => (
            <CodejamRow key={index} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CodejamTable;
