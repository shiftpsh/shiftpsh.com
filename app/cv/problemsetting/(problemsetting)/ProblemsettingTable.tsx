import {
  Cell,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@solved-ac/ui-react";
import ProblemsettingRow, { ProblemsettingRowData } from "./ProblemsettingRow";

const ProblemsettingTable = ({ data }: { data: ProblemsettingRowData[] }) => {
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
            <Cell style={{ width: "15%" }}>연도</Cell>
            <Cell style={{ width: "60%" }}>문제</Cell>
            <Cell style={{ width: "25%" }}>풀어보기</Cell>
          </Row>
        </TableHead>
        <TableBody>
          {data.map((data, index) => (
            <ProblemsettingRow key={index} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProblemsettingTable;
