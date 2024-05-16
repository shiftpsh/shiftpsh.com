"use client";

import {
  Cell,
  Enumerate,
  Item,
  Itemize,
  Paragraph,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typo,
} from "@solved-ac/ui-react";
import ExternalLinkInline from "../ExternalLinkInline";
import ContentHeading1 from "./ContentHeading1";
import ContentHeading2 from "./ContentHeading2";
import ContentImage from "./ContentImage";

const MDXComponents = {
  h1: (props: any) => <ContentHeading1 {...props} />,
  h2: (props: any) => <ContentHeading2 {...props} />,
  h3: (props: any) => <Typo h3 {...props} />,
  h4: (props: any) => <Typo h4 {...props} />,
  h5: (props: any) => <Typo h5 {...props} />,
  h6: (props: any) => <Typo h6 {...props} />,
  ul: (props: any) => <Itemize {...props} />,
  ol: (props: any) => <Enumerate {...props} />,
  li: (props: any) => <Item {...props} />,
  p: (props: any) => <Paragraph {...props} />,
  img: (props: any) => <ContentImage {...props} />,
  table: (props: any) => (
    <TableContainer
      style={{
        wordBreak: "keep-all",
      }}
    >
      <Table {...props} />
    </TableContainer>
  ),
  tr: (props: any) => <Row {...props} />,
  td: (props: any) => (
    <Cell
      style={{
        verticalAlign: "middle",
      }}
      {...props}
    />
  ),
  th: (props: any) => (
    <Cell
      header
      style={{
        verticalAlign: "middle",
      }}
      {...props}
    />
  ),
  thead: (props: any) => <TableHead {...props} />,
  tbody: (props: any) => <TableBody {...props} />,
  ExternalLink: ExternalLinkInline,
} as const;

export default MDXComponents;
