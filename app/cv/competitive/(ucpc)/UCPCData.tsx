import { ReactNode } from "react";
import { UCPCRowData } from "./UCPCRow";

const NamuWiki = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const [link, hash] = href.split("#");
  return (
    <a
      href={`https://namu.wiki/w/${encodeURIComponent(link)}${
        hash ? `#${encodeURIComponent(hash)}` : ""
      }`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const TEAM_2024 = (
  <>
    <NamuWiki href="테라포밍 마스/프로젝트 카드#001 개척단 훈련소">
      개척단 훈련소
    </NamuWiki>{" "}
    (<NamuWiki href="테라포밍 마스/대기업시대#121 파괴공작">파괴공작</NamuWiki>,{" "}
    <NamuWiki href="테라포밍 마스/대기업시대#124 무장강도단 고용">
      무장강도단 고용
    </NamuWiki>
    ,{" "}
    <NamuWiki href="테라포밍 마스/대기업시대#125 해커">
      <b>해커</b>
    </NamuWiki>
    )
  </>
);

const TEAM_2023 = (
  <>
    <NamuWiki href="작혼#친선전(友人戦; Friendly Match)">작혼우인전</NamuWiki>
    3of4너만오면고 (
    <NamuWiki href="리치마작/역/역만#대삼원(大三元)">
      <b>론냐- 대삼원-</b>
    </NamuWiki>
    ,{" "}
    <NamuWiki href="리치마작/역/역만#사암각단기(四暗刻単騎)">
      론냐- 스안커 단기-
    </NamuWiki>
    ,{" "}
    <NamuWiki href="리치마작/역/역만#국사무쌍(国士無双)">
      론냐- 국사무쌍-
    </NamuWiki>
    )
  </>
);

const UCPCData: UCPCRowData[] = [
  {
    year: "2024",
    phase: "FINALS",
    contest: "2024 여름 대회 본선",
    contestLink: "https://2024.ucpc.me/",
    team: TEAM_2024,
    score: 10,
    penalty: 1422,
    rank: 4,
    totalTeams: 60,
    firstToSolve: ["L"],
    award: "3등상",
  },
  {
    year: "2024",
    phase: "PRELIMINARY",
    contest: "2024 여름 대회 예선",
    contestLink: "https://2024.ucpc.me/",
    team: TEAM_2024,
    score: 11,
    penalty: 721,
    rank: 2,
    totalTeams: 205,
    firstToSolve: ["A", "D", "G", "I", "J"],
  },
  {
    year: "2023",
    phase: "FINALS",
    contest: "2023 여름 대회 본선",
    contestLink: "https://2023.ucpc.me/",
    team: TEAM_2023,
    score: 3,
    penalty: 641,
    rank: 41,
    totalTeams: 44,
  },
  {
    year: "2023",
    phase: "PRELIMINARY",
    contest: "2023 여름 대회 예선",
    contestLink: "https://2023.ucpc.me/",
    team: TEAM_2023,
    score: 7,
    penalty: 540,
    rank: 44,
    totalTeams: 222,
  },
  {
    year: "2021",
    phase: "FINALS",
    contest: "2021 여름 대회 본선",
    contestLink: "https://2021.ucpc.me/",
    team: (
      <>
        Redshift (<b>shiftpsh</b>, 전해성, semteo04)
      </>
    ),
    score: 6,
    penalty: 662,
    rank: 12,
    totalTeams: 60,
    award: "5등상",
  },
  {
    year: "2021",
    phase: "PRELIMINARY",
    contest: "2021 여름 대회 예선",
    contestLink: "https://2021.ucpc.me/",
    team: (
      <>
        Redshift (<b>shiftpsh</b>, 전해성, semteo04)
      </>
    ),
    score: 8,
    penalty: 518,
    rank: 18,
    totalTeams: 267,
  },
  {
    year: "2019",
    phase: "PRELIMINARY",
    contest: "2019 여름 대회 예선",
    contestLink: "https://2019.ucpc.me/",
    team: (
      <>
        🐟 (<b>박수현</b>, 이준석, 박건)
      </>
    ),
    score: 3,
    penalty: 78,
    rank: 72,
    totalTeams: 270,
    firstToSolve: ["B"],
  },
];

export default UCPCData;
