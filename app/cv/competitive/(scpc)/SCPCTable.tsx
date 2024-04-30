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
import SCPCData from "./SCPCData";
import SCPCRow from "./SCPCRow";

const SCPCTable = () => {
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
              <Tooltip title="=: 획득한 점수">
                성적
                <Typo description>
                  <IconQuestionMark />
                </Typo>
              </Tooltip>
            </Cell>
          </Row>
        </TableHead>
        <TableBody>
          {SCPCData.filter((x) => !x.phase.match(/^ROUND_/)).map(
            (data, index) => (
              <SCPCRow key={index} data={data} />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SCPCTable;
