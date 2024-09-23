import ExternalLinkInline from "../components/ExternalLinkInline";
import { Content } from "./components";

const KO = {
  intro: {
    title: "안녕하세요, 개발자 겸 디자이너 박수현입니다.",
    content:
      "분야를 불문하고 능력치를 최대한 발휘해 문제를 정의하고 해결하는 것을 좋아합니다. 많은 사람에게 도움이 되는 디자인과 소프트웨어를 만들기 위해 끊임없이 고민하고 있습니다.",
  },
  history: {
    solved: {
      title: "솔브드",
      content: "대표",
    },
    sogang: {
      title: "서강대학교",
      content: "컴퓨터공학과 학부 4학년",
    },
    ngine: {
      former: "前",
      title: "엔진스튜디오(넥슨)",
      content: "소프트웨어 엔지니어 (파트장)",
    },
  },
  links: "모든 연락처/링크",
  cv: "자세한 이력",
  solved: {
    figure: {
      caption: "solved.ac Grand Arena (2024)",
      alt: "solved.ac 그랜드 아레나 파티에서 대회에 참전 중인 참가자들의 뒷모습을 촬영한 사진.",
    },
    title:
      "솔브드는 대한민국이 코딩 테스트와 알고리즘 문제해결을 공부하는 방법을 바꿨습니다.",
    links: {
      solved: "solved.ac",
      youtube: "소개 (프로그래머스 컨퍼런스)",
      youtubeLink: "https://www.youtube.com/watch?v=ggD9ry05axw",
    },
    content: (
      <>
        <Content>
          커뮤니티의 문제 난이도 기여를 기반으로 하여 알고리즘 문제해결을
          게이미피케이션하고, 이를 통해 즐겁게 문제를 풀면서 성장한
          프로그래머들이 다시 커뮤니티에 기여하도록 하는 선순환 모델은 대한민국
          최대 온라인 저지인{" "}
          <ExternalLinkInline href="https://acmicpc.net">
            백준 온라인 저지
          </ExternalLinkInline>
          의 방대한 문제 데이터베이스와 만나 국내외 15만 개발자의 성장을 돕고
          있습니다.
        </Content>
        <Content>
          솔브드만의 문제 난이도는 이제는 알고리즘 문제 난이도 체계의 de facto가
          되어, 여러 서적에서 난이도 지표로 활용되고 다른 온라인 저지 및
          프로그래밍 대회 출제자들이 활발히 참고하고 있습니다.
        </Content>
      </>
    ),
  },
  problemsolving: {
    figure: {
      caption: "ICPC World Finals Moscow (2021)",
      alt: "서강대학교 Redshift 팀이 ICPC World Finals Moscow에 입장하는 모습을 촬영한 사진.",
    },
    title:
      "다양한 문제를 창의적으로 정의하고 논리적으로 해결해나가고 있습니다.",
    links: {
      cv: "이력",
      icpc: "ICPCID",
    },
    content: (
      <>
        <Content>
          현실의 문제를 기술적으로 해결하는 것을 좋아하며, 기술적인 문제 자체를
          해결하는 것도 즐깁니다. 솔브드 또한 기술적인 문제를 해결하는 필드에서
          현실의 문제를 발견하고, 다시 현실의 문제를 기술적으로 해결해나가는
          과정이자 결과물입니다.
        </Content>
        <Content>
          최대 규모의 국제 프로그래밍 대회인{" "}
          <ExternalLinkInline href="https://icpc.global/">
            국제 대학생 프로그래밍 대회(ICPC)
          </ExternalLinkInline>{" "}
          한국 대표로 결승에 진출하고, 대규모 국제 해커톤인{" "}
          <ExternalLinkInline href="https://asia.hackjunction.com/home/">
            정션 아시아
          </ExternalLinkInline>{" "}
          해커톤에서 2위를 차지하는 등 여러 대회에 도전하여 유수한 성과를
          거두었습니다. 또한,{" "}
          <ExternalLinkInline href="https://www.nypc.co.kr/">
            넥슨 청소년 프로그래밍 챌린지(NYPC)
          </ExternalLinkInline>{" "}
          출제위원으로 여러 문제를 출제하였습니다.
        </Content>
      </>
    ),
  },
};

const EN = {
  intro: {
    title: "I'm Suhyun Park, a developer and designer.",
    content:
      "I enjoy defining and solving problems to the best of my ability, regardless of the field. I’m always focused on creating designs and software that have a positive impact on many people.",
  },
  history: {
    solved: {
      title: "Solved Company",
      content: "CEO",
    },
    sogang: {
      title: "Sogang University",
      content: "Computer Science and Engineering, Senior",
    },
    ngine: {
      former: "Former",
      title: "Ngine Studios (NEXON)",
      content: "Software Engineer (Part Lead)",
    },
  },
  links: "All Links",
  cv: "CV",
  solved: {
    figure: {
      caption: "solved.ac Grand Arena (2024)",
      alt: "A photo of participants at the solved.ac Grand Arena party.",
    },
    title:
      "solved.ac has changed the way how Korea studies coding tests and problem solving.",
    links: {
      solved: "solved.ac",
      youtube: "CLI Symposium @ ICPC WF Astana",
      youtubeLink: "https://youtu.be/-wIKGAsvTBM?feature=shared&t=4384",
    },
    content: (
      <>
        <Content>
          The platform gamifies algorithmic problem-solving based on community
          problem difficulty contributions, allowing programmers to grow by
          solving problems and contributing back to the community, creating a
          virtuous cycle. Collaborating with the vast problem database of{" "}
          <ExternalLinkInline href="https://acmicpc.net">
            Baekjoon Online Judge
          </ExternalLinkInline>{" "}
          helps the growth of 150K developers in Korea and abroad.
        </Content>
        <Content>
          solved.ac&apos;s problem difficulty has now become the de facto
          difficulty system for algorithm problems in Korea, and is actively
          referred to by various books, other online judges, and problemsetters.
        </Content>
      </>
    ),
  },
  problemsolving: {
    figure: {
      caption: "ICPC World Finals Moscow (2021)",
      alt: "Sogang University Redshift team entering ICPC World Finals Moscow.",
    },
    title: "Problems defined creatively and solved logically.",
    links: {
      cv: "CV",
      icpc: "ICPCID",
    },
    content: (
      <>
        <Content>
          I enjoy solving real-world problems with technology, and technical
          problems themselves. Solved Company is a process and result of
          discovering real-world problems in fields that solve technical
          problems, and then solving them with technology.
        </Content>
        <Content>
          I have reached the finals as a representative of Korea in the{" "}
          <ExternalLinkInline href="https://icpc.global/">
            International Collegiate Programming Contest (ICPC)
          </ExternalLinkInline>{" "}
          and achieved excellent results in various competitions, such as
          placing 2<sup>nd</sup> in the large-scale international hackathon{" "}
          <ExternalLinkInline href="https://asia.hackjunction.com/home/">
            Junction Asia
          </ExternalLinkInline>
          . I have also served as a problem setter for the{" "}
          <ExternalLinkInline href="https://www.nypc.co.kr/">
            NEXON Youth Programming Challenge (NYPC)
          </ExternalLinkInline>
          .
        </Content>
      </>
    ),
  },
};

export const translations = {
  ko: KO,
  en: EN,
};
