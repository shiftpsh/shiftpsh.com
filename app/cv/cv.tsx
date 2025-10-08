import ExternalLinkInline from "../../components/ExternalLinkInline";
import { CVSection } from "./types";

export const CV: CVSection[] = [
  // -------- 1. Education --------
  {
    title: {
      ko: "학력",
      en: "Education",
    },
    items: [
      {
        date: [
          new Date("2018-03-02T00:00:00+09:00"),
          new Date("2025-02-18T10:00:00+09:00"),
        ],
        iconSrc: "sogang.svg",
        color: "#b60005",
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://sogang.ac.kr">
                서강대학교
              </ExternalLinkInline>{" "}
              컴퓨터공학과 학부 졸업
            </>
          ),
          en: (
            <>
              B.S. in Computer Science,{" "}
              <ExternalLinkInline href="https://sogang.ac.kr">
                Sogang University
              </ExternalLinkInline>
            </>
          ),
        },
      },
    ],
  },
  // -------- 2. Experience --------
  {
    title: {
      ko: "경력",
      en: "Experience",
    },
    items: [
      {
        date: [new Date("2025-01-06T00:00:00+09:00"), "present"],
        iconSrc: "nexon.svg",
        color: "#b4e114",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://company.nexon.com">
                넥슨코리아
              </ExternalLinkInline>{" "}
              소프트웨어 엔지니어
            </>
          ),
          en: (
            <>
              Software Engineer,{" "}
              <ExternalLinkInline href="https://company.nexon.com">
                NEXON Korea
              </ExternalLinkInline>
            </>
          ),
        },
        description: {
          ko: "플랫폼본부 알고리즘연구팀",
          en: "Algorithm Research Team",
        },
        subitems: [
          {
            ko: "프로그래밍 대회 기획 및 알고리즘 문제 연구개발",
            en: "Planning programming contests and researching and developing algorithm problems",
          },
          {
            ko: "사내 분야불문 여러 최적화 문제의 해결",
            en: "Solving various optimization problems across different fields within the company",
          },
        ],
      },
      {
        date: [
          new Date("2022-12-05T00:00:00+09:00"),
          new Date("2025-03-18T00:00:00+09:00"),
        ],
        iconSrc: "solvedac.svg",
        color: "#17ce3a",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://solved.ac">
                솔브드
              </ExternalLinkInline>{" "}
              대표
            </>
          ),
          en: (
            <>
              CEO,{" "}
              <ExternalLinkInline href="https://solved.ac">
                Solved Company
              </ExternalLinkInline>
            </>
          ),
        },
        subitems: [
          {
            ko: "솔브드 프로젝트 전반의 기획 및 개발",
            en: "Planning and development of the overall project",
          },
          {
            ko: (
              <>
                <ExternalLinkInline href="https://solved.ac">
                  solved.ac
                </ExternalLinkInline>{" "}
                사이트의 개발 및 유지보수 (프론트엔드/백엔드/DevOps) &ndash;
                Next.js, Express, AWS
              </>
            ),
            en: (
              <>
                Development and maintenance of the{" "}
                <ExternalLinkInline href="https://solved.ac">
                  solved.ac
                </ExternalLinkInline>{" "}
                website (frontend/backend/DevOps) &ndash; Next.js, Express, AWS
              </>
            ),
          },
          {
            ko: (
              <>
                <ExternalLinkInline href="https://solved.ac/arena">
                  아레나
                </ExternalLinkInline>{" "}
                대회의 코디네이션 및 검수
              </>
            ),
            en: (
              <>
                Coordination and review of contests on{" "}
                <ExternalLinkInline href="https://solved.ac/arena">
                  Arena
                </ExternalLinkInline>
              </>
            ),
          },
        ],
      },
      {
        date: [
          new Date("2020-06-22T00:00:00+09:00"),
          new Date("2022-11-19T00:00:00+09:00"),
        ],
        iconSrc: "ngine.svg",
        color: "#fd2500",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://career.nexon.com/user/recruit/member/postList?joinCorp=GN">
                엔진스튜디오
              </ExternalLinkInline>
              (넥슨컴퍼니) 소프트웨어 엔지니어 (파트장)
            </>
          ),
          en: (
            <>
              Software Engineer,{" "}
              <ExternalLinkInline href="https://career.nexon.com/user/recruit/member/postList?joinCorp=GN">
                Ngine Studios
              </ExternalLinkInline>
              (NEXON Company) (Part Lead)
            </>
          ),
        },
        description: {
          ko: "기술연구팀",
          en: "Technology Research Team",
        },
        subitems: [
          {
            ko: "웹 프론트엔드 엔지니어링; 산업기능요원 복무만료",
            en: "Web frontend engineering; completed mandatory military service as an industrial technical personnel",
          },
          {
            ko: (
              <>
                <ExternalLinkInline href="https://www.intelligencelabs.tech/">
                  인텔리전스랩스
                </ExternalLinkInline>
                와 협업하여 사내 분석 플랫폼 프론트엔드 설계 및 개발 &ndash;
                React
              </>
            ),
            en: (
              <>
                Collaborated with{" "}
                <ExternalLinkInline href="https://www.intelligencelabs.tech/">
                  Intelligence Labs
                </ExternalLinkInline>
                to design and develop the frontend of the in-house analytics
                platform &ndash; React
              </>
            ),
          },
          {
            ko: (
              <>
                <ExternalLinkInline href="https://www.nypc.co.kr/">
                  넥슨 청소년 프로그래밍 챌린지 (NYPC)
                </ExternalLinkInline>{" "}
                대회 참가자 시스템 프론트엔드 개발 &ndash; React
              </>
            ),
            en: (
              <>
                Developed the frontend of the participant system for the{" "}
                <ExternalLinkInline href="https://www.nypc.co.kr/">
                  NEXON Youth Programming Challenge (NYPC)
                </ExternalLinkInline>{" "}
                &ndash; React
              </>
            ),
          },
          {
            ko: (
              <>
                <ExternalLinkInline href="https://www.nypc.co.kr/">
                  넥슨 청소년 프로그래밍 챌린지 (NYPC)
                </ExternalLinkInline>{" "}
                출제사무국 선제/출제위원
              </>
            ),
            en: (
              <>
                Problem setter and committee member for the{" "}
                <ExternalLinkInline href="https://www.nypc.co.kr/">
                  NEXON Youth Programming Challenge (NYPC)
                </ExternalLinkInline>
              </>
            ),
          },
        ],
      },
      {
        date: [
          new Date("2018-06-25T00:00:00+09:00"),
          new Date("2018-09-01T00:00:00+09:00"),
        ],
        iconSrc: "hpcnt.png",
        color: "#1e1e1e",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://hyperconnect.com/">
                하이퍼커넥트
              </ExternalLinkInline>
              (매치 그룹) 소프트웨어 엔지니어 (인턴)
            </>
          ),
          en: (
            <>
              Software Engineer Intern,{" "}
              <ExternalLinkInline href="https://hyperconnect.com/">
                Hyperconnect
              </ExternalLinkInline>
              (Match Group)
            </>
          ),
        },
        description: {
          ko: "Hyper-X",
          en: "Hyper-X",
        },
        subitems: [
          {
            ko: "Android 엔지니어링",
            en: "Android engineering",
          },
          {
            ko: "기존 카메라 어플리케이션에 사용되던 리거시 Camera1 API를 Camera2 API로 마이그레이션 – Kotlin, RxJava",
            en: "Migrated legacy Camera1 API to Camera2 API in the existing camera application – Kotlin, RxJava",
          },
          {
            ko: "JUnit과 Robolectric을 사용한 테스트 작성",
            en: "Wrote tests using JUnit and Robolectric",
          },
        ],
      },
    ],
  },
  // -------- 3. Honors & Awards --------
  {
    title: {
      ko: "수상 및 출전",
      en: "Honors & Awards",
    },
    items: [
      {
        date: new Date("2024-08-31T00:00:00+09:00"),
        iconSrc: "samsung.svg",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://www.codeground.org/scpc/commons/honer/list">
                삼성 대학생 프로그래밍 경진대회 (SCPC)
              </ExternalLinkInline>{" "}
              2024
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://www.codeground.org/scpc/commons/honer/list">
                Samsung Collegiate Programming Contest (SCPC)
              </ExternalLinkInline>{" "}
              2024
            </>
          ),
        },
        description: {
          ko: "개인, 4등상",
          en: "Individual, 4th Place Award",
        },
      },
      {
        date: new Date("2024-08-03T00:00:00+09:00"),
        iconSrc: "ucpc.svg",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://2024.ucpc.me/">
                전국 대학생 프로그래밍 대회 동아리 연합 (UCPC)
              </ExternalLinkInline>{" "}
              2024
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://2024.ucpc.me/">
                Union of Clubs for Programming Contests (UCPC) Contest
              </ExternalLinkInline>{" "}
              2024
            </>
          ),
        },
        description: {
          ko: "팀 개척단 훈련소, 4위",
          en: "Team 개척단 훈련소('Colonizer Training Camp'), 4th Place",
        },
      },
      {
        date: new Date("2024-03-02T00:00:00+09:00"),
        iconSrc: "icpc.svg",
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://icpc.asia/">
                International Collegiate Programming Contest (ICPC)
              </ExternalLinkInline>{" "}
              2024 아시아태평양지역 챔피언십, 하노이
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://icpc.asia/">
                International Collegiate Programming Contest (ICPC)
              </ExternalLinkInline>{" "}
              2024 Asia Pacific Championship, Hanoi
            </>
          ),
        },
        description: {
          ko: "팀 Redshift(박수현, 이준석, 채성우), Honorable, 37위",
          en: "Team Redshift (Park Suhyun, Lee Junseok, Chae Seongwoo), Honorable, 37th Place",
        },
      },
      {
        date: new Date("2023-08-26T00:00:00+09:00"),
        iconSrc: "sinchon.svg",
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://icpc-sinchon.io/suapc">
                신촌지역 대학교 프로그래밍 동아리 연합 대회 (SUAPC)
              </ExternalLinkInline>{" "}
              2023 Summer
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://icpc-sinchon.io/suapc">
                ICPC Sinchon Contest (SUAPC)
              </ExternalLinkInline>{" "}
              2023 Summer
            </>
          ),
        },
        description: {
          ko: "팀 Redshift(박수현, 이준석, 채성우), 1위",
          en: "Team Redshift (Park Suhyun, Lee Junseok, Chae Seongwoo), 1st Place",
        },
      },
      {
        date: new Date("2022-08-21T00:00:00+09:00"),
        iconSrc: "junction.png",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://asia.hackjunction.com/">
                Junction Asia
              </ExternalLinkInline>{" "}
              2022 Chainapsis 트랙
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://asia.hackjunction.com/">
                Junction Asia
              </ExternalLinkInline>{" "}
              2022 Chainapsis Track
            </>
          ),
        },
        description: {
          ko: "팀 decoGit(박수현, 이수호, 정진주, 최희원), 2위",
          en: "Team decoGit (Park Suhyun, Lee Suho, Jung Jinju, Choi Huiwon), 2nd Place",
        },
      },
      {
        date: new Date("2021-10-06T00:00:00+09:00"),
        iconSrc: "icpc.svg",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://icpc.global/">
                International Collegiate Programming Contest (ICPC)
              </ExternalLinkInline>{" "}
              제44회 월드 파이널, 모스크바
            </>
          ),
          en: (
            <>
              The 44th{" "}
              <ExternalLinkInline href="https://icpc.global/">
                International Collegiate Programming Contest (ICPC)
              </ExternalLinkInline>{" "}
              World Finals, Moscow
            </>
          ),
        },
        description: {
          ko: "한국 대표팀, Redshift(박수현, 이준석, 이상원), Honorable, 87위",
          en: "Redshift (Park Suhyun, Lee Junseok, Lee Sangwon), Honorable, 87th Place",
        },
      },
      {
        date: new Date("2018-11-23T00:00:00+09:00"),
        iconSrc: "sogang.svg",
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://icpc.team/spc">
                서강 프로그래밍 대회(SPC)
              </ExternalLinkInline>{" "}
              2018 Master Division
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://icpc.team/spc">
                Sogang Programming Contest (SPC)
              </ExternalLinkInline>{" "}
              2018 Master Division
            </>
          ),
        },
        description: {
          ko: "개인, 금상, 1위",
          en: "Individual, Gold Prize, 1st Place",
        },
      },
    ],
  },
  // -------- 4. Projects --------
  {
    title: {
      ko: "프로젝트",
      en: "Projects",
    },
    items: [
      {
        date: [new Date("2019-06-05T00:00:00+09:00"), "present"],
        iconSrc: "solvedac.svg",
        color: "#17ce3a",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://solved.ac">
                solved.ac
              </ExternalLinkInline>{" "}
              알고리즘 문제해결 학습의 이정표
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://solved.ac">
                solved.ac
              </ExternalLinkInline>
              : Community Powered Guide for Programming Challenges
            </>
          ),
        },
        description: {
          ko: "개인 프로젝트(기획, 개발 및 디자인)",
          en: "Personal project (Development and design)",
        },
        subitems: [
          {
            ko: "백준 온라인 저지의 문제 데이터와 집단지성을 활용한 알고리즘 문제 데이터베이스 구축 및 동기 부여 시스템 설계",
            en: "Built an algorithm problem database and motivation system using problem data from Baekjoon Online Judge and collective intelligence",
          },
          {
            ko: (
              <>
                <ExternalLinkInline href="https://blog.shift.moe/2022/05/09/making-react-component-library-in-2022/">
                  컴포넌트 라이브러리 제작
                </ExternalLinkInline>
                ,{" "}
                <ExternalLinkInline href="https://blog.shift.moe/2023/10/24/how-solved-ac-merch-is-born/">
                  굿즈 생성 자동화
                </ExternalLinkInline>{" "}
                등 기술적으로 챌린징한 다양한 문제 해결
              </>
            ),
            en: (
              <>
                Solved various technically challenging problems such as{" "}
                <ExternalLinkInline href="https://blog.shift.moe/2022/05/09/making-react-component-library-in-2022/">
                  creating a component library
                </ExternalLinkInline>
                , and{" "}
                <ExternalLinkInline href="https://blog.shift.moe/2023/10/24/how-solved-ac-merch-is-born/">
                  automating a personalized merchandise system
                </ExternalLinkInline>{" "}
              </>
            ),
          },
          {
            ko: "월간 활성 사용자 6만, 누적 가입자 20만",
            en: "60K monthly active users, 200K total users",
          },
        ],
      },
      {
        date: [
          new Date("2022-02-14T00:00:00+09:00"),
          new Date("2025-01-06T00:00:00+09:00"),
        ],
        iconSrc: "biko.svg",
        color: "#924eff",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://biko.kr">
                모두의 코딩 학교 BIKO
              </ExternalLinkInline>
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://biko.kr">
                BIKO
              </ExternalLinkInline>
              : Coding for Everyone
            </>
          ),
        },
        description: {
          ko: "프론트엔드 설계, 개발 및 디자인",
          en: "Frontend development and engineering",
        },
        subitems: [
          {
            ko: "초중고등학교 공교육 현장에서 활용을 목적으로 한 학습 관리 시스템(LMS) 설계 및 개발",
            en: "Designed and developed a Learning Management System (LMS) for use in K-12 public education",
          },
          {
            ko: "다양한 유형(객관식, 주관식, 인터랙티브, 빈 칸 채우기, 코드 작성)의 문제를 해결할 수 있는 페이지 및 이를 활용할 수 있는 수업 시스템 설계 및 구현 – Next.js, Typescript",
            en: "Designed and implemented pages that can handle various types of questions (multiple choice, short answer, interactive, fill-in-the-blank, coding) and a class system that utilizes them – Next.js, Typescript",
          },
          {
            ko: "한국정보올림피아드 응시자 시스템을 기반으로 대회를 개최할 수 있는 시스템 구현",
            en: "Implemented a system that can host contests based on the KOI participant system",
          },
        ],
      },
      {
        date: [
          new Date("2021-05-01T00:00:00+09:00"),
          new Date("2023-07-31T00:00:00+09:00"),
        ],
        iconSrc: "koi.png",
        color: "#002992",
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://koi.or.kr">
                한국정보올림피아드
              </ExternalLinkInline>
              응시자 시스템 프론트엔드
            </>
          ),
          en: (
            <>
              Frontend for{" "}
              <ExternalLinkInline href="https://koi.or.kr">
                Korean Olympiad in Informatics (KOI)
              </ExternalLinkInline>
              Participant System
            </>
          ),
        },
        description: {
          ko: "프론트엔드 설계, 개발 및 디자인",
          en: "Frontend development and engineering",
        },
        subitems: [
          {
            ko: "코로나19의 영향으로 온라인 개최된 2021년 대회에서 처음 사용하여 지속적인 유지보수로 2023년 대회까지 사용, 이후 대회는 BIKO 시스템 기반으로 진행",
            en: "First used in the 2021 contest held online due to COVID-19, it was continuously maintained and used until the 2023 contest, after which contests are held based on the BIKO system",
          },
          {
            ko: "WebSocket을 활용한 실시간 채점 결과 확인, 부정행위 방지를 위한 화면 녹화 등 여러 챌린징한 기능 구현 – React, Typescript",
            en: "Implemented several challenging features such as real-time judging results using WebSocket and screen recording to prevent cheating – React, Typescript",
          },
        ],
      },
      {
        date: [
          new Date("2018-04-01T00:00:00+09:00"),
          new Date("2023-04-30T00:00:00+09:00"),
        ],
        title: {
          ko: <>ask.shiftp.sh 트위터 한정 익명 질문 플랫폼</>,
          en: (
            <>ask.shiftp.sh: Anonymous Question Platform Limited to Twitter</>
          ),
        },
        description: {
          ko: "개인 프로젝트(개발 및 디자인)",
          en: "Personal project (Development and design)",
        },
        subitems: [
          {
            ko: "PHP, Twitter API(v1), Vanilla JavaScript",
            en: "PHP, Twitter API(v1), Vanilla JavaScript",
          },
        ],
      },
      {
        date: [
          new Date("2015-01-01T00:00:00+09:00"),
          new Date("2017-12-31T00:00:00+09:00"),
        ],
        title: {
          ko: <>Jubeatbook 아케이드 게임 기록 관리 어플리케이션</>,
          en: <>Jubeatbook: Arcade Game Record Management Application</>,
        },
        description: {
          ko: "총괄 기획, 개발 및 디자인",
          en: "Overall planning, development, and design",
        },
        subitems: [
          {
            ko: "Android(Kotlin), Firebase, PHP",
            en: "Android(Kotlin), Firebase, PHP",
          },
        ],
      },
    ],
  },
  // -------- 5. Talks --------
  {
    title: {
      ko: "강연",
      en: "Talks",
    },
    items: [
      {
        date: new Date("2024-09-20T20:00:00+05:00"),
        iconSrc: "icpc.svg",
        bold: true,
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://youtu.be/-wIKGAsvTBM?feature=shared&t=4384">
                solved.ac – Community Guide for Programming Challenges
              </ExternalLinkInline>
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://youtu.be/-wIKGAsvTBM?feature=shared&t=4384">
                solved.ac – Community Guide for Programming Challenges
              </ExternalLinkInline>
            </>
          ),
        },
        description: {
          ko: (
            <>
              <ExternalLinkInline href="https://symposium.cli.u.icpc.global/2024-schedule/">
                ICPC Competitive Learning Institute Symposium
              </ExternalLinkInline>{" "}
              2024: ICPC 라이브러리
              <br />
              카자흐스탄 아스타나 (영어)
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://symposium.cli.u.icpc.global/2024-schedule/">
                ICPC Competitive Learning Institute Symposium
              </ExternalLinkInline>{" "}
              2024: ICPC Library
              <br />
              Astana, Kazakhstan (English)
            </>
          ),
        },
      },
      {
        date: new Date("2022-11-26T11:00:00+09:00"),
        iconSrc: "programmers.svg",
        bold: true,
        title: {
          ko: (
            <ExternalLinkInline href="https://www.youtube.com/watch?v=ggD9ry05axw">
              모두의 성장을 위한 서비스 만들기: solved.ac 개발 경험을 토대로
            </ExternalLinkInline>
          ),
          en: (
            <ExternalLinkInline href="https://www.youtube.com/watch?v=ggD9ry05axw">
              Building a Service for Everyone&apos;s Growth: Based on the
              Development Experience of solved.ac
            </ExternalLinkInline>
          ),
        },
        description: {
          ko: (
            <>
              <ExternalLinkInline href="https://pgconf.vfairs.com/">
                프로그래머스 컨퍼런스 1st: 커뮤니티 기반 학습을 통한 성장 가속화
              </ExternalLinkInline>
              <br />
              온라인 (한국어)
            </>
          ),
          en: (
            <>
              <ExternalLinkInline href="https://pgconf.vfairs.com/">
                Programmers Conference 1st: Accelerating Growth through
                Community-Based Learning
              </ExternalLinkInline>
              <br />
              Online (Korean)
            </>
          ),
        },
      },
    ],
  },
  // -------- 6. Other Activities --------
  {
    title: {
      ko: "기타 활동",
      en: "Other Activities",
    },
    items: [
      {
        date: [
          new Date("2024-09-01T00:00:00+09:00"),
          new Date("2024-12-28T00:00:00+09:00"),
        ],
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://www.sogang.ac.kr/ko/home">
                서강대학교
              </ExternalLinkInline>{" "}
              문제해결프로그래밍(CSE4152) 출제조교
            </>
          ),
          en: (
            <>
              TA for Problem Solving Programming (CSE4152),{" "}
              <ExternalLinkInline href="https://www.sogang.ac.kr/ko/home">
                Sogang University
              </ExternalLinkInline>
            </>
          ),
        },
      },
      {
        date: [
          new Date("2020-04-01T00:00:00+09:00"),
          new Date("2021-01-01T00:00:00+09:00"),
        ],
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://ucpc.me">
                전국 대학생 프로그래밍 대회 동아리 연합
              </ExternalLinkInline>{" "}
              회장
            </>
          ),
          en: (
            <>
              President,{" "}
              <ExternalLinkInline href="https://ucpc.me">
                Union of Clubs for Programming Contests (UCPC)
              </ExternalLinkInline>
            </>
          ),
        },
      },
      {
        date: [
          new Date("2019-01-01T00:00:00+09:00"),
          new Date("2019-12-31T00:00:00+09:00"),
        ],
        title: {
          ko: (
            <>
              <ExternalLinkInline href="https://icpc.team">
                Sogang ICPC Team
              </ExternalLinkInline>{" "}
              학회장
            </>
          ),
          en: (
            <>
              President,{" "}
              <ExternalLinkInline href="https://icpc.team">
                Sogang ICPC Team
              </ExternalLinkInline>
            </>
          ),
        },
      },
      {
        date: "present",
        title: {
          ko: "여러 프로그래밍 대회 운영, 출제 및 검수",
          en: "Organizing, setting, and reviewing various programming contests",
        },
      },
    ],
  },
];
