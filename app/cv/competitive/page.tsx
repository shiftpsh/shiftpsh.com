"use client";

import { Divider, Paragraph, Typo } from "@solved-ac/ui-react";
import ExternalLinkInline from "../../../components/ExternalLinkInline";
import CodejamTable from "./(codejam)/CodejamTable";
import ICPCTable from "./(icpc)/ICPCTable";
import SCPCTable from "./(scpc)/SCPCTable";
import SUAPCTable from "./(suapc)/SUAPCTable";
import UCPCTable from "./(ucpc)/UCPCTable";

const Page = () => {
  return (
    <>
      <Typo h2>팀 대회 참가</Typo>
      <Typo h3>ICPC</Typo>
      <Paragraph>
        <Typo description>
          <ExternalLinkInline href="https://icpc.global/">
            International Collegiate Programming Contest
          </ExternalLinkInline>{" "}
          &middot; 국제 대학생 프로그래밍 대회
        </Typo>
      </Paragraph>
      <ICPCTable />
      <Typo h3>UCPC</Typo>
      <Paragraph>
        <Typo description>
          <ExternalLinkInline href="https://ucpc.me/">
            전국 대학생 프로그래밍 대회 동아리 연합 여름 대회
          </ExternalLinkInline>
        </Typo>
      </Paragraph>
      <UCPCTable />
      <Typo h3>SUAPC</Typo>
      <Paragraph>
        <Typo description>
          <ExternalLinkInline href="https://icpc-sinchon.io/suapc">
            신촌지역 대학교 프로그래밍 동아리 연합 대회
          </ExternalLinkInline>
        </Typo>
      </Paragraph>
      <SUAPCTable />
      <Divider />
      <Typo h2>개인 대회 참가</Typo>
      <Typo h3>Google Code Jam</Typo>
      <CodejamTable />
      <Typo h3>SCPC</Typo>
      <SCPCTable />
    </>
  );
};

export default Page;
