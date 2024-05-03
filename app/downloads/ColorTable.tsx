import {
  TableContainer,
  Table,
  TableHead,
  Row,
  Cell,
  TableBody,
  Typo,
} from "@solved-ac/ui-react";
import CopyButton from "../../components/CopyButton";
import { darken, readableColor } from "polished";
import styled from "@emotion/styled";
import { IconCopy } from "@tabler/icons-react";

const ColorValueCell = styled(Cell)`
  text-align: center;
  font-feature-settings: "tnum";
`;

const ColorHexCell = styled(Cell)`
  text-align: center;
`;

const CopyCell = styled(Cell)`
  text-align: center;
  border-right: ${({ theme }) => theme.styles.border()};
`;

interface Color {
  name: string;
  rgb: string;
  cmyk: [number, number, number, number];
}

const COLORS: Color[] = [
  {
    name: "Shifted Ruby",
    rgb: "#ff3b57",
    cmyk: [0, 96, 48, 0],
  },
  {
    name: "Shifted Gold",
    rgb: "#ffb717",
    cmyk: [2, 36, 100, 0],
  },
  {
    name: "Shifted Sunshade",
    rgb: "#ffa71a",
    cmyk: [0, 45, 96, 0],
  },
  {
    name: "Shifted Midnight",
    rgb: "#0b1b38",
    cmyk: [96, 16, 9, 92],
  },
  {
    name: "Shifted Gray",
    rgb: "#8a8f95",
    cmyk: [16, 8, 4, 46],
  },
];

const ColorTable = () => {
  return (
    <>
      <TableContainer>
        <Table
          fullWidth
          padding="dense"
          verticalAlign="middle"
          style={{
            minWidth: 540,
          }}
        >
          <TableHead>
            <Row>
              <Cell style={{ width: "24%" }} rowSpan={2} />
              <CopyCell style={{ width: "44%" }} colSpan={5}>
                RGB
              </CopyCell>
              <Cell style={{ width: "32%" }} colSpan={4}>
                CMYK
              </Cell>
            </Row>
            <Row>
              <Cell style={{ width: "8%" }}>R</Cell>
              <Cell style={{ width: "8%" }}>G</Cell>
              <Cell style={{ width: "8%" }}>B</Cell>
              <Cell style={{ width: "12%" }}>#</Cell>
              <CopyCell style={{ width: "8%" }}>
                <IconCopy />
              </CopyCell>
              <Cell style={{ width: "8%" }}>C</Cell>
              <Cell style={{ width: "8%" }}>M</Cell>
              <Cell style={{ width: "8%" }}>Y</Cell>
              <Cell style={{ width: "8%" }}>K</Cell>
            </Row>
          </TableHead>
          <TableBody>
            {COLORS.map(({ name, rgb, cmyk }) => (
              <Row key={name}>
                <Cell
                  style={{
                    backgroundColor: rgb,
                    color: readableColor(darken(0.2, rgb)),
                  }}
                >
                  {name}
                </Cell>
                <ColorValueCell>{parseInt(rgb.slice(1, 3), 16)}</ColorValueCell>
                <ColorValueCell>{parseInt(rgb.slice(3, 5), 16)}</ColorValueCell>
                <ColorValueCell>{parseInt(rgb.slice(5, 7), 16)}</ColorValueCell>
                <ColorHexCell>
                  <Typo readable>{rgb}</Typo>
                </ColorHexCell>
                <CopyCell>
                  <CopyButton copyText={rgb} />
                </CopyCell>
                <ColorValueCell>{cmyk[0]}</ColorValueCell>
                <ColorValueCell>{cmyk[1]}</ColorValueCell>
                <ColorValueCell>{cmyk[2]}</ColorValueCell>
                <ColorValueCell>{cmyk[3]}</ColorValueCell>
              </Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ColorTable;
