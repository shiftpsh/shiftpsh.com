"use client";

import { Typo } from "@solved-ac/ui-react";
import ProblemsettingData from "./(problemsetting)/ProblemsettingData";
import ProblemsettingDataCompany from "./(problemsetting)/ProblemsettingDataCompany";
import ProblemsettingDataPersonal from "./(problemsetting)/ProblemsettingDataPersonal";
import ProblemsettingTable from "./(problemsetting)/ProblemsettingTable";
import ProblemsettingDataCoursework from "./(problemsetting)/ProblemsettingDataCoursework";

const Page = () => {
  return (
    <>
      <Typo h2>출제 및 검수</Typo>
      <Typo h3>기업 대회 출제</Typo>
      <ProblemsettingTable data={ProblemsettingDataCompany} />
      <Typo h3>학교 시험 출제</Typo>
      <ProblemsettingTable data={ProblemsettingDataCoursework} />
      <Typo h3>학교/동아리 대회 출제</Typo>
      <ProblemsettingTable data={ProblemsettingData} />
      <Typo h3>개인 대회 출제</Typo>
      <ProblemsettingTable data={ProblemsettingDataPersonal} />
    </>
  );
};

export default Page;
