"use client";

import {
  Enumerate,
  Item,
  Itemize,
  Paragraph,
  Space,
  Typo,
} from "@solved-ac/ui-react";
import MainContainer from "../../../components/MainContainer";
import TitieBreadcrumb from "../../../components/TitleBreadcrumb";
import { EmailLinkItem } from "../../links/LinkItem";
import { IconAt } from "@tabler/icons-react";

const Page = () => {
  return (
    <MainContainer>
      <Space h={160} />
      <Typo h1>
        <TitieBreadcrumb>박한별</TitieBreadcrumb> 2차 창작 가이드라인
      </Typo>
      <Paragraph>
        본 가이드라인은 박한별(이하 한별이)에 대한 2차 창작 활동에 도움을
        드리고자 마련되었습니다.
      </Paragraph>
      <Paragraph>
        저는 한별이의 저작권자로서 한별이를 활용한 모든 종류의 2차 창작을 적극
        환영하며, 아래 가이드라인을 준수하는 콘텐츠에 대하여 저작권 침해를
        주장하지 않겠습니다.
      </Paragraph>
      <Typo h2>1. 정의</Typo>
      <Paragraph>
        <Itemize>
          <Item>
            <b>2차 창작</b>이란 한별이에 대한 이해를 바탕으로 창작자 스스로가
            새로운 창작성을 더하여 새로운 만드는 것을 의미합니다.
          </Item>
          <Item>
            <b>공식 콘텐츠</b>란 시프트, 시프트디자인 및 솔브드가 제작, 공개 및
            발표하는 콘텐츠를 의미합니다.
          </Item>
          <Item>
            <b>권리자</b>란 본인(박수현, shiftpsh.com) 및 본인이 운영하는 회사인
            시프트디자인을 의미합니다.
          </Item>
        </Itemize>
      </Paragraph>
      <Typo h2>2. 제한 사항</Typo>
      <Paragraph>
        다음 조건을 만족하는 개인 및 단체는, 비영리 목적에 한하여, 아래 사항을
        준수하여 2차 창작 콘텐츠를 제작할 수 있습니다.
        <Enumerate>
          <Item>
            권리자 혹은 제3자의 평판 혹은 명예를 손상시키는 콘텐츠가 아닐 것
          </Item>
          <Item>
            권리자의 공식 콘텐츠, 혹은 권리자가 협찬하거나 공인하는 콘텐츠로
            오인될 가능성이 없는 콘텐츠일 것
          </Item>
          <Item>
            인종, 성, 성적 지향, 지역, 종교, 교육 수준, 생활 수준 등에 기반해
            혐오적인 내용, 혹은 그런 내용을 암시하거나 함의하는 내용을 담고 있는
            콘텐츠가 아닐 것
          </Item>
          <Item>
            자해, 자살 조장, 또는 공포, 불안을 조장할 수 있는 등의 가학적이거나
            유해한 내용을 담고 있는 콘텐츠가 아닐 것
          </Item>
          <Item>
            타인의 개인정보를 무단으로 공개하는 등 타인의 권리를 침해하는 행위를
            유발할 수 있는 콘텐츠가 아닐 것
          </Item>
          <Item>
            지식재산권 관련 법령 및 기타 법령에 저촉되거나, 반사회적인 콘텐츠가
            아닐 것
          </Item>
        </Enumerate>
      </Paragraph>
      <Typo h2>3. 예외 사항</Typo>
      <Paragraph>
        개인 및 법인격이 없는 단체가 영리적인 목적의 2차 창작 콘텐츠를
        제작하고자 할 경우, 2번 항목들의 제한 사항에 불구하고 아래 예외를
        준수하는 경우에 한하여 허용합니다.
        <Enumerate>
          <Item>
            불특정 다수가 열람 가능한 플랫폼(유튜브, 트위치, 블로그 등)에서 광고
            수익을 얻는 것을 목적으로 하는 경우
          </Item>
          <Item>
            온리전, 배포전, 교류회 등에서, 2차 창작 콘텐츠를 바탕으로 한 상품을
            소량 판매하는 경우
          </Item>
          <Item>권리자에게 사전 허가를 받은 경우</Item>
        </Enumerate>
      </Paragraph>
      <Typo h2>4. 저작권</Typo>
      <Paragraph>
        본 가이드라인을 준수하여 제작된 2차 창작 콘텐츠는 권리자에게
        지식재산권이 있는 부분을 제외하고는 창작자에게 그 지식재산권이 있습니다.
      </Paragraph>
      <Typo h2>5. 가이드라인의 변경 및 수정</Typo>
      <Paragraph>
        본 가이드라인은 언제든지 변경 및 수정될 수 있습니다. 변경 및 수정된
        가이드라인은 즉시 효력을 발생하며 본 페이지에 게시됩니다. 본
        가이드라인이 개정되면서 창작자에게 발생하는 불이익에 대해서는 권리자가
        책임지지 않습니다.
      </Paragraph>
      <Typo h2>6. 문의</Typo>
      <Paragraph>
        본 가이드라인과 관련하여 궁금하신 점이 있으시다면, 아래 연락처로 문의
        부탁드립니다.
      </Paragraph>
      <EmailLinkItem
        email="me@shiftpsh.com"
        src="/img/email.svg"
        icon={<IconAt />}
        caption="문의 이메일"
      />
      <Space h={160} />
    </MainContainer>
  );
};

export default Page;
