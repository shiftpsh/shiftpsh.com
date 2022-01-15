import React, { useState } from 'react'
import ContentPadding from '../../layouts/ContentPadding'
import ClientMapEntry from '../../types/ClientMapEntry'
import {
  atcoderTitle,
  codeforcesTitle,
  numberFormat
} from '../../utils/Formatting'
import Article from '../Article'
import Button from '../Button'
import Caption from '../Caption'
import Collapse from '../Collapse'
import Description from '../Descrption'
import OuterLink from '../OuterLink'
import ProfileList from '../ProfileList'
import Space from '../Space'
import Subcaption, { Subsubcaption } from '../Subcaption'

interface Props {
  map: ClientMapEntry[]
}

interface State {
  detailsShown: boolean
}

// TODO move contents to markdown etc

const ShiftAsADeveloper: React.FC<Props> = (props) => {
  const map = new Map(props.map.map(({ key, value }) => [key, value]))
  const [state, setState] = useState<State>({
    detailsShown: false,
  })

  return (
    <>
      <ContentPadding>
        <Subcaption>Programming</Subcaption>
        <Caption content={'지금까지 연 중괄호 수는\n기억 못 하고 있습니다'} />
        <Space h={64} />
        <Article>
          <p>프로그래머입니다. 여기저기서 돌아가는 프로그램을 만듭니다.</p>
          <p>
            검은 화면에 흰색 글씨만 나오는 심심해 보이는 프로그램부터
            스마트폰에서 돌아가는 앱과 게임, 브라우저에서 돌아가는 홈페이지나 웹
            앱, 지구 어딘가에서 열심히 돌아가는 서버도 만듭니다.
          </p>
        </Article>
        <Button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              detailsShown: !prevState.detailsShown,
            }))
          }}
        >
          {state.detailsShown ? '전체 이력 숨기기' : '전체 이력 보기'}
        </Button>
        <Space h={32} />
        <Article>
          <Subsubcaption>Work Experiences</Subsubcaption>
          <ProfileList>
            <li>
              <OuterLink href="https://company.nexon.com">
                <b>NGINE STUDIOS / NEXON COMPANY</b>
              </OuterLink>{' '}
              소프트웨어 엔지니어<Description>, 2020. 6 &ndash;</Description>
              <Collapse shown={state.detailsShown}>
                <p>
                  넥슨컴퍼니 산하 엔진스튜디오에서 산업기능요원으로 일하고
                  있습니다.{' '}
                  <OuterLink href="http://it.chosun.com/site/data/html_dir/2020/11/14/2020111401042.html">
                    인텔리전스랩스
                  </OuterLink>
                  와 긴밀하게 협업하고 있으며, 여러 분야의 엔지니어링 업무를
                  수행 중입니다.{' '}
                  <OuterLink href="https://www.typescriptlang.org/">
                    Typescript
                  </OuterLink>
                  , <OuterLink href="https://nodejs.org/">Node.js</OuterLink>와{' '}
                  <OuterLink href="https://reactjs.org/">React</OuterLink>,
                  CSS를 사용한 프론트엔드 엔지니어링이 주 업무입니다.
                </p>
                <Space h="0.5em" />
              </Collapse>
              <ProfileList>
                <li>
                  기술연구팀 시스템개발파트 파트장
                  <Description>, 2021. 12 &ndash;</Description>
                </li>
              </ProfileList>
              <ProfileList>
                <li>
                  <b>
                    <OuterLink href="https://www.nypc.co.kr/main/main.do">
                      NYPC 넥슨 청소년 프로그래밍 챌린지
                    </OuterLink>
                  </b>
                  <ProfileList>
                    <li>
                      <b>출제위원</b>, 2021
                      <Collapse shown={state.detailsShown}>
                        <ProfileList>
                          <li>
                            NYPC 출제사무국에서 프로그래밍 문제 선제 및 출제를
                            담당했습니다.
                          </li>
                        </ProfileList>
                      </Collapse>
                    </li>
                    <Collapse shown={state.detailsShown} as="li">
                      <b>대회 시스템 엔지니어링</b>, 2020 &ndash; 2021
                      <ProfileList>
                        <li>
                          대회 시스템 설계와{' '}
                          <OuterLink href="https://contest.nypc.co.kr">
                            참가자용 프론트엔드
                          </OuterLink>{' '}
                          개발에 참여했습니다.
                        </li>
                        <li>
                          관리자용 클라이언트와 내부 공개용 대회 순위 페이지,
                          그리고{' '}
                          <OuterLink href="https://nypc.github.io/2020/">
                            외부 공개용 문제 업로드 페이지
                          </OuterLink>
                          를 개발했습니다.
                        </li>
                        <li>
                          참가자용 프론트엔드는{' '}
                          <OuterLink href="https://reactjs.org/">
                            React
                          </OuterLink>
                          로 인터페이스를 구성하고, WebSocket을 이용해 대회
                          서버와 통신하도록 구현했습니다.
                        </li>
                        <li>
                          외부 공개용 문제 업로드 페이지는{' '}
                          <OuterLink href="https://jekyllrb.com/">
                            Jekyll
                          </OuterLink>
                          을 이용해 문제를 Markdown으로 작성하면 이를 기반으로
                          정적 사이트를 생성하도록 구성했습니다.
                        </li>
                      </ProfileList>
                      <Space h="0.5em" />
                    </Collapse>
                  </ProfileList>
                </li>
                <Collapse shown={state.detailsShown} as="li">
                  넥슨컴퍼니 사내 여러 분석 플랫폼의 프론트엔드와 백엔드를
                  제작하고 있습니다.
                </Collapse>
              </ProfileList>
              <Space h="2em" />
            </li>
            <li>
              <OuterLink href="https://hyperconnect.com/">
                <b>HYPERCONNECT</b>
              </OuterLink>{' '}
              소프트웨어 엔지니어 (인턴)
              <Description>, 2018. 6 &ndash; 2018. 8</Description>
              <Collapse shown={state.detailsShown}>
                <p>
                  하이퍼커넥트의 신규 프로덕트 발굴 팀{' '}
                  <OuterLink href="https://hyperconnect.github.io/2018/07/20/hyper-x-interview.html">
                    Hyper X
                  </OuterLink>
                  에서 Android 엔지니어로 일했습니다.
                </p>
                <ProfileList>
                  <li>
                    <OuterLink href="https://kotlinlang.org/">Kotlin</OuterLink>
                    과 <OuterLink href="http://reactivex.io/">RxJava</OuterLink>
                    를 사용하여 Android 어플리케이션 개발에 참여했습니다.
                  </li>
                  <li>
                    <OuterLink href="https://blog.shift.moe/2018/09/05/camera2-overview/">
                      리거시 Camera1 API 대신 Camera2 API를 이용해 기존 로직을
                      구현하고 앱에 적용했습니다.
                    </OuterLink>{' '}
                    적용 과정을 사내에서 발표했습니다.
                  </li>
                  <li>
                    <OuterLink href="https://junit.org/">JUnit</OuterLink>과{' '}
                    <OuterLink href="http://robolectric.org/">
                      Robolectric
                    </OuterLink>
                    을 사용해 테스트를 작성했습니다.
                  </li>
                </ProfileList>
                <Space h="2em" />
              </Collapse>
            </li>
            <Collapse shown={state.detailsShown} as="li">
              <OuterLink href="https://sogang.ac.kr/">
                <b>서강대학교 융합소프트웨어전공</b>
              </OuterLink>{' '}
              SCSC 방학 코딩 워크샵 강사
              <Description>, 2019. 8 &ndash; 2020. 1</Description>
              <p>
                융합소프트웨어전공 학생들을 대상으로 기업 코딩 테스트 대비
                알고리즘 문제해결 전략에 대한 강의를 진행했습니다.
              </p>
            </Collapse>
          </ProfileList>
          <Space h="2em" />
          <Subsubcaption>Education</Subsubcaption>
          <ProfileList>
            <li>
              <OuterLink href="https://cs.sogang.ac.kr">
                <b>서강대학교 컴퓨터공학과</b>
              </OuterLink>{' '}
              학부 18학번<Description>, 2018. 3 &ndash; (휴학)</Description>
              <Collapse shown={state.detailsShown}>
                <p>4학기까지 GPA 3.50/4.30 (CSE 3.75/4.30)</p>
              </Collapse>
            </li>
          </ProfileList>
          <Space h="2em" />
          <Subsubcaption>Achievements</Subsubcaption>
          <ProfileList>
            <li>
              <OuterLink href="https://icpc.baylor.edu">
                <b>ICPC</b> International Colligiate Programming Contest
              </OuterLink>
              <Collapse shown={state.detailsShown}>
                <p>
                  3명의 대학생이 팀을 이루어 프로그래밍 문제들을 시간 안에
                  빠르게 해결하는 세계 최대 규모의 프로그래밍 대회입니다. 한국
                  본선에는 약 90개 팀이 출전합니다.
                </p>
              </Collapse>
              <Space h="0.5em" />
              <ProfileList>
                <li>
                  <OuterLink href="https://icpc.global/">
                    <b>
                      44<sup>th</sup> Annual World Finals Moscow
                    </b>{' '}
                  </OuterLink>{' '}
                  Honorable Mention<Description>, 2021. 10. 6</Description>
                  <br />
                  Representing the Republic of Korea - Sogang University
                  <Collapse shown={state.detailsShown}>
                    <p>
                      ICPC 세계 결승전에 대한민국 서강대학교 대표로, 팀
                      Redshift(박수현, 이준석, 이상원)로 출전했습니다.
                    </p>
                  </Collapse>
                  <Space h="0.5em" />
                </li>
                <li>
                  <b>
                    2019{' '}
                    <OuterLink href="http://icpckorea.org">
                      Asia Seoul Regional
                    </OuterLink>{' '}
                    Contest
                  </b>{' '}
                  8<sup>th</sup> place<Description>, 2019. 11. 9</Description>
                  <br />
                  Advanced to the World Finals
                  <br />
                  First solved problems C and J
                  <Collapse shown={state.detailsShown}>
                    <p>
                      ICPC 한국 본선에 서강대학교 대표로, 팀 Redshift(박수현,
                      박건, 이준석)로 출전했습니다.
                    </p>
                  </Collapse>
                  <Space h="0.5em" />
                </li>
                <li>
                  <b>2019 Asia Bangkok Regional Contest</b> 31<sup>st</sup>{' '}
                  place
                  <Description>, 2019. 11. 3</Description>
                  <Collapse shown={state.detailsShown}>
                    <p>팀 Redshift(박수현, 박건, 이준석)로 출전했습니다.</p>
                  </Collapse>
                  <Space h="2em" />
                </li>
              </ProfileList>
            </li>
            <li>
              <OuterLink href="https://research.samsung.com/scpc">
                <b>SCPC</b> Samsung Colligiate Programming Contest
              </OuterLink>
              <Collapse shown={state.detailsShown}>
                <p>
                  삼성전자에서 주최하는 프로그래밍 대회로, 대학생/대학원생
                  개인이 참가해 프로그래밍 문제들을 시간 안에 빠르게 해결하는
                  대회입니다. 결승에는 약 140명 가량이 출전합니다.
                </p>
              </Collapse>
              <Space h="0.5em" />
              <ProfileList>
                <li>
                  <b>2021</b> Finalist<Description>, 2021. 9. 4</Description>
                </li>
                <li>
                  <b>2020</b> Finalist<Description>, 2020. 11. 7</Description>
                </li>
                <li>
                  <b>2019</b> Finalist<Description>, 2019. 7. 30</Description>
                </li>
              </ProfileList>
              <Space h="2em" />
            </li>
            <li>
              <OuterLink href="https://ucpc.me">
                <b>UCPC</b> 전국 대학생 프로그래밍 대회 동아리 연합 여름 대회
              </OuterLink>
              <Space h="0.5em" />
              <ProfileList>
                <li>
                  <b>2021</b> 5등상 / 팀 12위
                  <Description>, 2021. 8. 4</Description>
                  <Collapse shown={state.detailsShown}>
                    <p>팀 Redshift(박수현, 이준석, 전해성)로 출전했습니다.</p>
                  </Collapse>
                  <Space h="2em" />
                </li>
              </ProfileList>
            </li>
            <Collapse shown={state.detailsShown} as="li">
              <OuterLink href="https://acm.sogang.ac.kr/spc">
                <b>SPC</b> Sogang Programming Contest
              </OuterLink>
              <ProfileList>
                <li>
                  <b>2018</b> Master Division 1<sup>st</sup> place
                  <Description>, 2018. 11. 23</Description>
                </li>
              </ProfileList>
              <Space h="2em" />
            </Collapse>
            <Collapse shown={state.detailsShown} as="li">
              서강대학교 공학부 Dean's List
              <ProfileList>
                <li>2018-1학기</li>
              </ProfileList>
              <Space h="2em" />
            </Collapse>
          </ProfileList>
          <Subsubcaption>Projects</Subsubcaption>
          <ProfileList>
            <li>
              2021{' '}
              <OuterLink href="https://koi.or.kr">
                <b>한국정보올림피아드</b>
              </OuterLink>{' '}
              대회 시스템
              <Description>, 2021. 5 &ndash; 2021. 7</Description>
              <p>&mdash; 아웃소싱 / 프론트엔드 설계, 개발 및 디자인</p>
              <Space h="0.5em" />
              <p>
                <OuterLink href="https://www.kiise.or.kr/">
                  한국정보과학회
                </OuterLink>
                에서 주최하는 한국정보올림피아드의 대회 시스템 프론트엔드 전반을
                설계하고 개발했습니다.
              </p>
              <Collapse shown={state.detailsShown}>
                <Space h="0.5em" />
                <ProfileList>
                  <li>
                    선다형, 단답형,{' '}
                    <OuterLink href="https://www.bebras.kr/">
                      비버챌린지
                    </OuterLink>
                    형, 프로그래밍형 등 다양한 유형의 문제를 해결할 수 있는
                    클라이언트를 제작했습니다.
                  </li>
                  <li>
                    WebSocket을 활용한 실시간 채점 결과 확인, 부정행위 방지를
                    위한 화면 녹화 등 여러 챌린징한 기능들을 구현했으며 모든
                    디자인과 컴포넌트를 직접 제작했습니다.
                  </li>
                </ProfileList>
              </Collapse>
              <Space h="2em" />
            </li>
            <li>
              <OuterLink href="https://solved.ac">
                <b>solved.ac</b>
              </OuterLink>{' '}
              알고리즘 문제해결 학습의 이정표
              <Description>, 2019. 6 &ndash;</Description>
              <p>&mdash; 개인 프로젝트 / 기획, 운영, 개발 및 디자인</p>
              <Space h="0.5em" />
              <p>
                <OuterLink href="https://www.acmicpc.net">
                  백준 온라인 저지
                </OuterLink>
                에서 제공하는 프로그래밍 문제들에 집단지성을 이용해 난이도를
                매기고, 사용자가 푼 문제들을 바탕으로 사용자의 실력을 가늠해
                주어 알고리즘 문제해결 학습 동기를 증진시키기 위한 사이트입니다.
              </p>
              <p>
                기획, 운영, 개발, 디자인 등을 전부 혼자 담당하고 있으며,{' '}
                <OuterLink href="https://startlink.io">
                  주식회사 스타트링크
                </OuterLink>
                의 스폰서를 받고 있습니다.
              </p>
              <Collapse shown={state.detailsShown}>
                <Space h="0.5em" />
                <ProfileList>
                  <li>
                    프론트엔드는{' '}
                    <OuterLink href="https://reactjs.org/">React</OuterLink>와{' '}
                    <OuterLink href="https://nextjs.org/">Next.js</OuterLink>,
                    그리고{' '}
                    <OuterLink href="https://www.typescriptlang.org/">
                      Typescript
                    </OuterLink>
                    를 사용해 제작하고 있습니다. 인터페이스는{' '}
                    <OuterLink href="https://styled-components.com/">
                      styled-components
                    </OuterLink>
                    로 구성하고 있습니다.
                  </li>
                  <li>
                    백엔드는{' '}
                    <OuterLink href="https://nodejs.org/">Node.js</OuterLink>와{' '}
                    <OuterLink href="https://expressjs.com/">Express</OuterLink>
                    ,{' '}
                    <OuterLink href="http://sequelize.org/">
                      Sequelize ORM
                    </OuterLink>
                    , 그리고{' '}
                    <OuterLink href="https://www.typescriptlang.org/">
                      Typescript
                    </OuterLink>
                    를 사용해 제작하고 있습니다. 일부 요소들은{' '}
                    <OuterLink href="https://aws.amazon.com/ko/lambda/">
                      AWS Lambda
                    </OuterLink>
                    를 사용하고 있습니다.
                  </li>
                  <li>
                    프론트엔드와 백엔드는 모두 Docker 이미지로 빌드하고 AWS
                    ECS에 배포됩니다. 빌드부터 배포까지의 전 과정은 Github
                    Actions로 자동화되어 있습니다.
                  </li>
                  <li>
                    백준 온라인 저지의 공식 기능으로 통합되기 전까지는
                    WebExtensions 표준 기반의 브라우저 플러그인을 제작해
                    배포했습니다.{' '}
                    <OuterLink href="https://github.com/shiftpsh/solvedac-plugin">
                      shiftpsh/solvedac-plugin
                    </OuterLink>
                    에 소스가 공개되어 있습니다.
                  </li>
                </ProfileList>
              </Collapse>
              <Space h="2em" />
            </li>
            <li>
              <OuterLink href="https://ask.shiftp.sh">
                <b>ask.shiftp.sh</b>
              </OuterLink>{' '}
              트위터 한정 익명 질문 플랫폼
              <Description>, 2018. 4 &ndash;</Description>
              <p>&mdash; 개인 프로젝트 / 개발 및 디자인</p>
              <Space h="0.5em" />
              <Collapse shown={state.detailsShown}>
                <p>
                  기존에 사용하던 익명 질문 플랫폼에서 스팸 질문들이 오던 것이
                  불편해 새로 제작했습니다. 인증된 트위터 유저들끼리만 질문과
                  답변을 주고받는 것이 가능합니다.
                </p>
                <ProfileList>
                  <li>
                    질문에 대한 답변이 달리면 데스크톱 알림을 통해 답변이
                    달렸다는 사실을 알 수 있습니다.
                  </li>
                </ProfileList>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <b>Jubeatbook</b> 아케이드 게임 기록 관리 어플리케이션
              <Description>, 2015. 1 &ndash; 2017. 12(개발 중단)</Description>
              <p>&mdash; 팀 프로젝트 / 총괄 기획, 개발 및 디자인</p>
              <Collapse shown={state.detailsShown}>
                <p>
                  KONAMI의 아케이드 게임{' '}
                  <OuterLink href="https://p.eagate.573.jp/game/jubeat/">
                    Jubeat
                  </OuterLink>
                  에서 기록한 점수 등을 관리해 주는 Android/iOS
                  어플리케이션입니다. 프로젝트를 총괄하면서 백엔드와 Android
                  프론트엔드 개발을 주로 했고, 디자인도 했습니다.
                </p>
                <ProfileList>
                  <li>
                    유저 개개인의 기록 페이지를 파싱하고 유저의 점수들을 분석해,
                    같은 난이도의 패턴이더라도 어떤 곡이 상대적으로 더 쉽고
                    어려운지 정리해 주는 시스템을 개발했습니다.
                  </li>
                  <li>
                    Play 스토어에서 배포했으며, 프로젝트 중단 직전 누적 설치
                    수는 10,000+회였습니다.
                  </li>
                </ProfileList>
              </Collapse>
            </li>
          </ProfileList>
          <Space h="2em" />
          <Subsubcaption>Extracurricular Activities</Subsubcaption>
          <ProfileList>
            <li>
              <OuterLink href="https://ucpc.me">
                <b>전국 대학생 프로그래밍 대회 동아리 연합</b>
              </OuterLink>{' '}
              前 회장<Description>, 2020. 4 &ndash; 2021. 1</Description>
              <Collapse shown={state.detailsShown}>
                <p>
                  전국 24개교의 프로그래밍 대회 동아리 연합입니다. 동아리 연합
                  대회 UCPC를 총괄했습니다.
                </p>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <OuterLink href="https://acm.sogang.ac.kr">
                <b>Sogang ICPC Team</b>
              </OuterLink>{' '}
              前 학회장<Description>, 2019. 1 &ndash; 2019. 12</Description>
              <Collapse shown={state.detailsShown}>
                <p>
                  서강대학교의 알고리즘 문제해결 동아리입니다. 알고리즘 스터디를
                  진행하고, 학회 전반을 운영했습니다.
                </p>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <OuterLink href="https://stackoverflow.com/users/2688304/shiftpsh">
                StackOverflow
              </OuterLink>{' '}
              [kotlin] 상위 5%, [android] 상위 10%
              <Collapse shown={state.detailsShown}>
                <Space h="2em" />
              </Collapse>
            </li>
            <Collapse shown={state.detailsShown} as="li">
              <OuterLink href="https://www.facebook.com/koreahacks/">
                고려대학교 해커톤 2021 KOREA HACKS '온라인 고카톤'
              </OuterLink>{' '}
              멘토
              <p>
                Android와 웹 프론트엔드 분야에서 해커톤 참여 팀들의 질문들을
                해결해 주는 등의 업무를 수행했습니다.
              </p>
              <Space h="2em" />
            </Collapse>
            <Collapse shown={state.detailsShown} as="li">
              2020학년도 선린인터넷고등학교 알고리즘 토크쇼 강연
              <Description>, 2020. 12</Description>
            </Collapse>
            <Collapse shown={state.detailsShown} as="li">
              서강대학교 중앙 컴퓨터 동아리{' '}
              <OuterLink href="https://www.facebook.com/theSogangComputerClub/">
                SGCC
              </OuterLink>{' '}
              동아리원<Description>, 2018. 3 &ndash; (현재)</Description>
            </Collapse>
            <Collapse shown={state.detailsShown} as="li">
              서강대학교 컴퓨터공학과 학회 Release 학회원
              <Description>, 2019. 9 &ndash; (현재)</Description>
            </Collapse>
          </ProfileList>
          <Space h="2em" />
          <Subsubcaption>Other Experiences</Subsubcaption>
          <ProfileList>
            {map.has('cf_rating_highest') ? (
              <li>
                <OuterLink href="https://codeforces.com/profile/shiftpsh">
                  Codeforces
                </OuterLink>{' '}
                최고 레이팅 {numberFormat(+map.get('cf_rating_highest')!, 0)} (
                {codeforcesTitle(+map.get('cf_rating_highest')!)})
                <Collapse shown={state.detailsShown}>
                  <p>
                    러시아 기반의 프로그래밍 대회 플랫폼입니다.
                    {map.has('cf_rank') && map.has('cf_total_user_count') ? (
                      <>
                        {' '}
                        레이팅 {numberFormat(+map.get('cf_rating_highest')!, 0)}
                        은 활동하는 유저 중 상위{' '}
                        {numberFormat(
                          (+map.get('cf_rank')! /
                            +map.get('cf_total_user_count')!) *
                            100,
                          2
                        )}
                        %에 해당됩니다.
                      </>
                    ) : null}
                  </p>
                  <Space h="2em" />
                </Collapse>
              </li>
            ) : null}
            {map.has('ac_rating_highest') ? (
              <Collapse shown={state.detailsShown} as="li">
                <OuterLink href="https://atcoder.jp/users/shiftpsh">
                  AtCoder
                </OuterLink>{' '}
                최고 레이팅 {numberFormat(+map.get('ac_rating_highest')!, 0)} (
                {atcoderTitle(+map.get('ac_rating_highest')!)})
                {/* TODO load information automatically */}
                <p>
                  일본 기반의 프로그래밍 대회 플랫폼입니다.
                  {map.has('ac_rank') && map.has('ac_total_user_count') ? (
                    <>
                      {' '}
                      레이팅 {numberFormat(+map.get('ac_rating_highest')!, 0)}은
                      활동하는 유저 중 상위{' '}
                      {numberFormat(
                        (+map.get('ac_rank')! /
                          +map.get('ac_total_user_count')!) *
                          100,
                        2
                      )}
                      %에 해당됩니다.
                    </>
                  ) : null}
                </p>
                <Space h="2em" />
              </Collapse>
            ) : null}
            <li>
              여러 프로그래밍 대회 운영, 출제 및 검수
              <Collapse shown={state.detailsShown}>
                <Space h="0.5em" />
                <ProfileList>
                  <li>
                    <OuterLink href="https://www.nypc.co.kr">
                      <b>NYPC</b> 넥슨 청소년 프로그래밍 챌린지
                    </OuterLink>
                    <Description>, 넥슨·넥슨재단 주최</Description>
                    <ProfileList>
                      <li>
                        <b>2021</b> 제6회 &mdash; 출제
                        <Description>, 2021. 10. 30</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://nypc.github.io/2021/2021_online_1.html">
                              계단
                            </OuterLink>{' '}
                            &mdash; 예선 1일차 1
                          </li>
                          <li>
                            <OuterLink href="https://nypc.github.io/2021/2021_online_7.html">
                              루트가 많은 트리?
                            </OuterLink>{' '}
                            &mdash; 예선 2일차 7
                          </li>
                        </ProfileList>
                      </li>
                    </ProfileList>
                    <Space h="0.5em" />
                  </li>
                  <li>
                    <OuterLink href="https://ucpc.me">
                      <b>UCPC</b> 전국 대학생 프로그래밍 대회 동아리 연합 대회
                    </OuterLink>
                    <Description>
                      , 전국 대학생 프로그래밍 대회 동아리 연합(전대프연) 주최
                    </Description>
                    <ProfileList>
                      <li>
                        <OuterLink href="https://2020.ucpc.me">
                          <b>2020</b>
                        </OuterLink>{' '}
                        &mdash; 운영 및 출제 총괄
                        <Description>, 2020. 8. 1</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/19532">
                              수학은 비대면강의입니다
                            </OuterLink>{' '}
                            &mdash; 예선 A
                          </li>
                        </ProfileList>
                      </li>
                    </ProfileList>
                    <Space h="0.5em" />
                  </li>
                  <li>
                    <OuterLink href="https://acm.sogang.ac.kr/spc">
                      <b>SPC</b> 서강대학교 프로그래밍 대회
                    </OuterLink>
                    <Description>, 서강대학교 컴퓨터공학부 주최</Description>
                    <ProfileList>
                      <li>
                        <b>2021</b> 제17회 &mdash; 출제 및 검수
                        <Description>, 2021. 11. 27</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/23738">
                              Ресторан
                            </OuterLink>{' '}
                            &mdash; Master A
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/23747">
                              와드
                            </OuterLink>{' '}
                            &mdash; Champion B
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/23753">
                              연결 요소와 쿼리
                            </OuterLink>{' '}
                            &mdash; Champion H, 공동 출제 (w/{' '}
                            <OuterLink href="https://kyouko.moe/">
                              이혜아
                            </OuterLink>
                            )
                          </li>
                        </ProfileList>
                      </li>
                      <li>
                        <b>2020</b> 제16회 &mdash; 검수
                        <Description>, 2020. 11. 28</Description>
                      </li>
                      <li>
                        <b>2019</b> 제15회 &mdash; 운영 및 출제 총괄
                        <Description>, 2019. 11. 22</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/18108">
                              1998년생인 내가 태국에서는 2541년생?!
                            </OuterLink>{' '}
                            &mdash; Master A
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/18118">
                              7-세그먼트 디스플레이
                            </OuterLink>{' '}
                            &mdash; Master F
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/18110">
                              solved.ac
                            </OuterLink>{' '}
                            &mdash; Champion A
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/18123">
                              평행우주
                            </OuterLink>{' '}
                            &mdash; Champion H
                          </li>
                        </ProfileList>
                      </li>
                    </ProfileList>
                    <Space h="0.5em" />
                  </li>
                  <li>
                    <OuterLink href="https://icpc-sinchon.io/suapc">
                      <b>SUAPC</b> 신촌지역 대학교 프로그래밍 동아리 연합 여름
                      대회
                    </OuterLink>
                    <Description>
                      , 신촌지역 대학교 프로그래밍 동아리 연합 주최
                    </Description>
                    <ProfileList>
                      <li>
                        <b>2021 Summer</b> &mdash; 출제
                        <Description>, 2021. 8. 28</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/22983">
                              조각 체스판
                            </OuterLink>{' '}
                            &mdash; C
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/22992">
                              다꾸
                            </OuterLink>{' '}
                            &mdash; L
                          </li>
                        </ProfileList>
                      </li>
                      <li>
                        <b>2021 Winter</b> &mdash; 출제
                        <Description>, 2021. 2. 28</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/20938">
                              반짝반짝
                            </OuterLink>{' '}
                            &mdash; C
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/20941">
                              성싶당
                            </OuterLink>{' '}
                            &mdash; F, 공동 출제 (w/{' '}
                            <OuterLink href="https://cubelover.tistory.com/">
                              윤지학
                            </OuterLink>
                            )
                          </li>
                        </ProfileList>
                      </li>
                      <li>
                        <b>2020</b> &mdash; 출제
                        <Description>, 2020. 8. 15</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/19573">
                              꿀벌
                            </OuterLink>{' '}
                            &mdash; Division 1 B
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/19585">
                              전설
                            </OuterLink>{' '}
                            &mdash; Division 1 H
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/19584">
                              난개발
                            </OuterLink>{' '}
                            &mdash; Division 2 H
                          </li>
                        </ProfileList>
                      </li>
                    </ProfileList>

                    <Space h="0.5em" />
                  </li>
                  <li>
                    <b>Good Bye / Hello BOJ!</b>
                    <ProfileList>
                      <li>
                        <b>Good Bye, BOJ 2021!</b> &mdash; 출제
                        <Description>, 2021. 12. 31</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/24041">
                              성싶당 밀키트
                            </OuterLink>{' '}
                            &mdash; C
                          </li>
                        </ProfileList>
                      </li>
                      <li>
                        <b>Hello, BOJ 2022!</b> &mdash; 출제
                        <Description>, 2022. 1. 15</Description>
                        <ProfileList>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/24271">
                              xor²
                            </OuterLink>{' '}
                            &mdash; D
                          </li>
                          <li>
                            <OuterLink href="https://www.acmicpc.net/problem/24272">
                              루트 노드가 많은 트리일수록 좋은 트리이다
                            </OuterLink>{' '}
                            &mdash; E
                          </li>
                        </ProfileList>
                      </li>
                    </ProfileList>

                    <Space h="0.5em" />
                  </li>
                  <li>
                    <OuterLink href="https://cse.postech.ac.kr/2021-%ed%8f%ac%ec%8a%a4%ed%85%8d-%ed%94%84%eb%a1%9c%ea%b7%b8%eb%9e%98%eb%b0%8d-%ea%b2%bd%ec%a7%84%eb%8c%80%ed%9a%8cppc-%ea%b0%9c%ec%b5%9c-%ec%95%88%eb%82%b4/">
                      <b>2021 PPC</b> 포스텍 프로그래밍 경진대회
                    </OuterLink>{' '}
                    &mdash; 검수
                    <Description>, 2021. 12. 3</Description>
                  </li>
                  <li>
                    <OuterLink href="https://snups.snucse.org/snupc2020/">
                      <b>SNUPC 2020</b> 서울대학교 프로그래밍 경시대회
                    </OuterLink>{' '}
                    &mdash; 검수
                    <Description>, 2020. 9. 12</Description>
                  </li>
                  <li>
                    <OuterLink href="https://www.facebook.com/unist.unicode/">
                      <b>Uni-CODE 2020</b> UNIST 알고리즘 프로그래밍 경진대회
                    </OuterLink>{' '}
                    &mdash; 검수
                    <Description>, 2020. 11. 28</Description>
                  </li>
                </ProfileList>
                <Space h="2em" />
              </Collapse>
            </li>
          </ProfileList>
        </Article>
      </ContentPadding>
    </>
  )
}

export default ShiftAsADeveloper
