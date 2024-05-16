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
import ICPCData from "./ICPCData";
import ICPCRow from "./ICPCRow";

const ICPCTable = () => {
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
            <Cell>장소</Cell>
            <Cell>대회</Cell>
            <Cell>
              <Tooltip title="#: 순위, =: 해결한 문제 수 및 페널티">
                성적
                <Typo description>
                  <IconQuestionMark />
                </Typo>
              </Tooltip>
            </Cell>
          </Row>
        </TableHead>
        <TableBody>
          {ICPCData.map((data, index) => (
            <ICPCRow key={index} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ICPCTable;
