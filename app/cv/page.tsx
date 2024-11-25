"use client";

import { Item, Itemize, Typo } from "@solved-ac/ui-react";
import ExternalLinkInline from "../../components/ExternalLinkInline";
import Year from "./Year";

const Page = () => {
  return (
    <>
      <Typo h3>학력</Typo>
      <Itemize>
        <Item>
          <ExternalLinkInline href="https://sogang.ac.kr">
            서강대학교
          </ExternalLinkInline>{" "}
          컴퓨터공학과 학부(재학, 8학기)
          <Year>2018. 3 &ndash; 2025. 2</Year>
        </Item>
      </Itemize>
      <Typo h3>경력</Typo>
      <Itemize>
        <Item>
          <b>
            <ExternalLinkInline href="https://solved.ac">
              솔브드
            </ExternalLinkInline>{" "}
            대표
          </b>
          <Year>2022. 12 &ndash; 현재</Year>
          <Itemize>
            <Item>솔브드 프로젝트 전반의 기획 및 개발</Item>
            <Item>
              <ExternalLinkInline href="https://solved.ac">
                solved.ac
              </ExternalLinkInline>{" "}
              사이트의 개발 및 유지보수 (프론트엔드/백엔드/DevOps) &ndash;
              Next.js, Express, AWS
            </Item>
            <Item>
              <ExternalLinkInline href="https://solved.ac/arena">
                아레나
              </ExternalLinkInline>{" "}
              대회의 코디네이션 및 검수
            </Item>
          </Itemize>
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://career.nexon.com/user/recruit/member/postList?joinCorp=GN">
              엔진스튜디오(넥슨)
            </ExternalLinkInline>{" "}
            소프트웨어 엔지니어 (파트장)
          </b>
          <Year>2020. 6 &ndash; 2022. 11</Year>
          <Itemize>
            <Item>웹 프론트엔드 엔지니어링; 산업기능요원 복무만료</Item>
            <Item>
              <ExternalLinkInline href="https://www.intelligencelabs.tech/">
                인텔리전스랩스
              </ExternalLinkInline>
              와 협업하여 사내 분석 플랫폼 프론트엔드 설계 및 개발 &ndash; React
            </Item>
            <Item>
              <ExternalLinkInline href="https://www.nypc.co.kr/">
                넥슨 청소년 프로그래밍 챌린지 (NYPC)
              </ExternalLinkInline>{" "}
              대회 참가자 시스템 프론트엔드 개발 &ndash; React
            </Item>
            <Item>
              <ExternalLinkInline href="https://www.nypc.co.kr/">
                넥슨 청소년 프로그래밍 챌린지 (NYPC)
              </ExternalLinkInline>{" "}
              출제사무국 선제/출제위원 (2020&ndash;2023)
            </Item>
          </Itemize>
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://hyperconnect.com/">
              하이퍼커넥트
            </ExternalLinkInline>{" "}
            소프트웨어 엔지니어 (인턴)
          </b>
          <Year>2018. 6 &ndash; 2018. 8</Year>
          <Itemize>
            <Item>Android 엔지니어링</Item>
            <Item>
              기존 카메라 어플리케이션에 사용되던 리거시 Camera1 API를 Camera2
              API로 마이그레이션 &ndash; Kotlin, RxJava
            </Item>
            <Item>JUnit과 Robolectric을 사용한 테스트 작성</Item>
          </Itemize>
        </Item>
      </Itemize>
      <Typo h3>수상 및 출전</Typo>
      <Itemize>
        <Item>
          <b>
            <ExternalLinkInline href="https://www.codeground.org/scpc/commons/honer/listc">
              삼성 대학생 프로그래밍 경진대회 (SCPC)
            </ExternalLinkInline>{" "}
            2024
          </b>
          <Year>2024. 8. 31</Year>개인, 4등상
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://icpc.asia/">
              International Collegiate Programming Contest (ICPC)
            </ExternalLinkInline>{" "}
            2024 아시아태평양지역 챔피언십, 하노이
          </b>
          <Year>2024. 3. 2</Year>팀 Redshift(박수현, 이준석, 채성우), Honorable,
          37위
        </Item>
        <Item>
          <ExternalLinkInline href="https://icpc-sinchon.io/suapc">
            신촌지역 대학교 프로그래밍 동아리 연합 여름 대회 (SUAPC)
          </ExternalLinkInline>{" "}
          2023 Summer
          <Year>2023. 8. 26</Year>팀 Redshift(박수현, 이준석, 채성우), 1위
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://asia.hackjunction.com/">
              Junction Asia
            </ExternalLinkInline>{" "}
            2022 Chainapsis 트랙
          </b>
          <Year>2022. 8. 21</Year>팀 decoGit(박수현, 이수호, 정진주, 최희원),
          2위
        </Item>
        <Item>
          <ExternalLinkInline href="https://zibada.guru/gcj/">
            Google Code Jam
          </ExternalLinkInline>{" "}
          Round 3, 2022
          <Year>2022. 6. 5</Year>개인, 506위
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://icpc.global/">
              International Collegiate Programming Contest (ICPC)
            </ExternalLinkInline>{" "}
            제44회 월드 파이널, 모스크바
          </b>
          <Year>2021. 10. 6</Year>한국 대표팀, Redshift(박수현, 이준석, 이상원),
          Honorable, 87위
        </Item>
        <Item>
          <ExternalLinkInline href="https://ucpc.me/">
            전국 대학생 프로그래밍 대회 동아리 연합 여름 대회 (UCPC)
          </ExternalLinkInline>{" "}
          2021
          <Year>2021. 8. 4</Year>팀 Redshift(박수현, 이준석, 전해성), 5등상,
          12위
        </Item>
        <Item>
          <ExternalLinkInline href="https://icpc.team/spc">
            서강 프로그래밍 대회(SPC)
          </ExternalLinkInline>{" "}
          2018 Master Division
          <Year>2018. 11. 23</Year>개인, 금상, 1위
        </Item>
      </Itemize>
      <Typo h3>프로젝트</Typo>
      <Itemize>
        <Item>
          <b>
            <ExternalLinkInline href="https://solved.ac">
              solved.ac
            </ExternalLinkInline>{" "}
            알고리즘 문제해결 학습의 이정표
          </b>{" "}
          (
          <ExternalLinkInline href="https://github.com/solved-ac">
            GitHub
          </ExternalLinkInline>
          )<Year>2019. 6 &ndash; 현재</Year>
          <Itemize>
            <Item>개인 프로젝트(기획, 운영, 개발 및 디자인) &rarr; 창업</Item>
            <Item>
              프론트엔드 &ndash; React, Next.js, Emotion, Framer Motion,
              Typescript
            </Item>
            <Item>
              백엔드 &ndash; Node.js, Express, Prisma, Typescript / AWS ECS,
              Lambda, SQS, RDS(MariaDB), ElastiCache(Redis)
            </Item>
            <Item>
              yarn workspace + lerna의 모노레포 구조, GitHub Actions 및 Docker로
              배포 자동화
            </Item>
            <Item>
              <ExternalLinkInline href="https://blog.shift.moe/2022/05/09/making-react-component-library-in-2022/">
                컴포넌트 라이브러리 제작
              </ExternalLinkInline>
              ,{" "}
              <ExternalLinkInline href="https://blog.shift.moe/2023/10/24/how-solved-ac-merch-is-born/">
                굿즈 생성 자동화
              </ExternalLinkInline>{" "}
              등 기술적으로 챌린징한 다양한 문제 해결
            </Item>
          </Itemize>
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://biko.kr">
              모두의 코딩 학교 BIKO
            </ExternalLinkInline>{" "}
            프론트엔드
          </b>
          <Year>2022. 2 &ndash; 현재</Year>
          <Itemize>
            <Item>프론트엔드 설계, 개발 및 디자인</Item>
            <Item>
              초중고등학교 공교육 현장에서 활용을 목적으로 한 학습 관리
              시스템(LMS) 설계 및 개발
            </Item>
            <Item>
              다양한 유형(객관식, 주관식, 인터랙티브, 빈 칸 채우기, 코드 작성)의
              문제를 해결할 수 있는 페이지 및 이를 활용할 수 있는 수업 시스템
              설계 및 구현 &ndash; Next.js, Typescript
            </Item>
            <Item>
              한국정보올림피아드 응시자 시스템을 기반으로 대회를 개최할 수 있는
              시스템 구현
            </Item>
          </Itemize>
        </Item>
        <Item>
          <b>
            <ExternalLinkInline href="https://koi.or.kr">
              한국정보올림피아드
            </ExternalLinkInline>{" "}
            응시자 시스템 프론트엔드
          </b>
          <Year>2021. 5 &ndash; 2023. 7</Year>
          <Itemize>
            <Item>프론트엔드 설계, 개발 및 디자인</Item>
            <Item>
              코로나19의 영향으로 온라인 개최된 2021년 대회에서 처음 사용하여
              지속적인 유지보수로 2023년 대회까지 사용, 이후 대회는 BIKO 시스템
              기반으로 진행
            </Item>
            <Item>
              WebSocket을 활용한 실시간 채점 결과 확인, 부정행위 방지를 위한
              화면 녹화 등 여러 챌린징한 기능 구현 &ndash; React, Typescript
            </Item>
          </Itemize>
        </Item>
        <Item>
          ask.shiftp.sh: 트위터 한정 익명 질문 플랫폼
          <Year>2018. 4 &ndash; 2023. 4</Year>
          <Itemize>
            <Item>
              개인 프로젝트(개발 및 디자인) &ndash; PHP, Twitter API(v1),
              Vanilla JavaScript
            </Item>
          </Itemize>
        </Item>
        <Item>
          Jubeatbook: 아케이드 게임 기록 관리 어플리케이션
          <Year>2015. 1 &ndash; 2017. 12</Year>
          <Itemize>
            <Item>
              총괄 기획, 개발 및 디자인 &ndash; Android(Kotlin), Firebase, PHP
            </Item>
          </Itemize>
        </Item>
      </Itemize>
      <Typo h3>기타 활동</Typo>
      <Itemize>
        <Item>
          <b>
            <ExternalLinkInline href="https://ucpc.me">
              전국 대학생 프로그래밍 대회 동아리 연합
            </ExternalLinkInline>{" "}
            회장
          </b>
          <Year>2020. 4 &ndash; 2021. 1</Year>
        </Item>
        <Item>
          <ExternalLinkInline href="https://icpc.team">
            Sogang ICPC Team
          </ExternalLinkInline>{" "}
          학회장
          <Year>2019. 1 &ndash; 2019. 12</Year>
        </Item>
        <Item>여러 프로그래밍 대회 운영, 출제 및 검수</Item>
      </Itemize>
    </>
  );
};

export default Page;
