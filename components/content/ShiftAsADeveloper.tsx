import React, { useState } from 'react'
import ContentPadding from '../../layouts/ContentPadding'
import { numberFormat } from '../../utils/Formatting'
import Article from '../Article'
import Button from '../Button'
import Caption from '../Caption'
import Collapse from '../Collapse'
import Descrption from '../Descrption'
import OuterLink from '../OuterLink'
import ProfileList from '../ProfileList'
import Space from '../Space'
import Subcaption, { Subsubcaption } from '../Subcaption'

interface State {
  detailsShown: boolean
}

// TODO move contents to markdown etc

const ShiftAsADeveloper: React.FC = () => {
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
              소프트웨어 엔지니어<Descrption>, 2020. 6 &ndash;</Descrption>
              <Collapse shown={state.detailsShown}>
                <p>
                  넥슨컴퍼니 산하 엔진스튜디오에서 산업기능요원으로 일하고
                  있습니다.{' '}
                  <OuterLink href="https://www.typescriptlang.org/">
                    Typescript
                  </OuterLink>
                  , <OuterLink href="https://nodejs.org/">Node.js</OuterLink>와{' '}
                  <OuterLink href="https://reactjs.org/">React</OuterLink>,
                  CSS를 사용한 프론트엔드 엔지니어링이 주 업무입니다.
                </p>
                <Space h="0.5em" />
                <ProfileList>
                  <li>
                    <b>
                      <OuterLink href="https://www.nypc.co.kr/main/main.do">
                        NYPC 넥슨 청소년 프로그래밍 챌린지
                      </OuterLink>{' '}
                      2020
                    </b>
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
                        <OuterLink href="https://reactjs.org/">React</OuterLink>
                        로 인터페이스를 구성하고, WebSocket을 이용해 대회 서버와
                        통신하도록 구현했습니다.
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
                  </li>
                </ProfileList>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <OuterLink href="https://hyperconnect.com/">
                <b>HYPERCONNECT</b>
              </OuterLink>{' '}
              소프트웨어 엔지니어 (인턴)
              <Descrption>, 2018. 6 &ndash; 2018. 8</Descrption>
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
                    </OuterLink>
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
              <Descrption>, 2019. 8 &ndash; 2020. 1</Descrption>
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
              학부 18학번<Descrption>, 2018. 3 &ndash; (휴학)</Descrption>
              <Collapse shown={state.detailsShown}>
                <p>4학기까지 GPA 3.50/4.30 (CSE 3.75/4.30)</p>
              </Collapse>
            </li>
          </ProfileList>
          <Space h="2em" />
          <Subsubcaption>Honors and Awards</Subsubcaption>
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
              <ProfileList>
                <li>
                  <b>
                    2019{' '}
                    <OuterLink href="http://icpckorea.org">
                      Asia Seoul Regional
                    </OuterLink>{' '}
                    Contest
                  </b>{' '}
                  8<sup>th</sup> place<Descrption>, 2019. 11. 9</Descrption>
                  <Collapse shown={state.detailsShown}>
                    First solved problems C and J
                    <p>
                      ICPC 한국 본선에 서강대학교 대표로, 팀 Redshift(박수현,
                      박건, 이준석)로 출전했습니다.
                    </p>
                  </Collapse>
                </li>
                <li>
                  <b>2019 Asia Bangkok Regional Contest</b> 31<sup>th</sup>{' '}
                  place
                  <Descrption>, 2019. 11. 3</Descrption>
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
              <ProfileList>
                <li>
                  <b>2020</b> Finalist<Descrption>, 2020. 11. 7</Descrption>
                </li>
                <li>
                  <b>2019</b> Finalist<Descrption>, 2020. 7. 30</Descrption>
                </li>
              </ProfileList>
              <Collapse shown={state.detailsShown}>
                <Space h="2em" />
              </Collapse>
            </li>
            <Collapse shown={state.detailsShown} as="li">
              <OuterLink href="https://acm.sogang.ac.kr/spc">
                <b>SPC</b> Sogang Programming Contest
              </OuterLink>
              <ProfileList>
                <li>
                  <b>2018</b> Master Division 1<sup>st</sup> place
                  <Descrption>, 2018. 11. 23</Descrption>
                </li>
              </ProfileList>
              <Space h="2em" />
            </Collapse>
            <Collapse shown={state.detailsShown} as="li">
              <b>서강대학교 공학부 Dean's List</b>
              <ProfileList>
                <li>2018-1학기</li>
              </ProfileList>
            </Collapse>
          </ProfileList>
          <Space h="2em" />
          <Subsubcaption>Other Experiences</Subsubcaption>
          <ProfileList>
            <li>
              <OuterLink href="https://solved.ac">
                <b>solved.ac</b>
              </OuterLink>{' '}
              기획, 운영 및 개발<Descrption>, 2019. 6 &ndash;</Descrption>
              <Collapse shown={state.detailsShown}>
                <p>
                  <OuterLink href="https://www.acmicpc.net">
                    백준 온라인 저지
                  </OuterLink>
                  에서 제공하는 프로그래밍 문제들에 집단지성을 이용해 난이도를
                  매기고, 사용자가 푼 문제들을 바탕으로 사용자의 실력을 가늠해
                  주어 알고리즘 문제해결 학습 동기를 증진시키기 위한
                  사이트입니다.
                </p>
                <p>
                  기획, 운영, 개발, 디자인 등 전부 혼자 담당하고 있으며,{' '}
                  <OuterLink href="https://startlink.io">
                    주식회사 스타트링크
                  </OuterLink>
                  의 스폰서를 받고 있습니다.
                </p>
                <ProfileList>
                  <li>
                    프론트엔드는{' '}
                    <OuterLink href="https://reactjs.org/">React</OuterLink>와{' '}
                    <OuterLink href="https://nextjs.org/">Next.js</OuterLink>,
                    그리고{' '}
                    <OuterLink href="https://www.typescriptlang.org/">
                      Typescript
                    </OuterLink>
                    를 사용해 제작하고 있습니다. 인터페이스는
                    <OuterLink href="https://styled-components.com/">
                      styled-components
                    </OuterLink>
                    로 구성하고 있으며,{' '}
                    <OuterLink href="https://www.docker.com/">Docker</OuterLink>
                    를 사용해 배포하고 있습니다.
                  </li>
                  <li>
                    백엔드는{' '}
                    <OuterLink href="https://kotlinlang.org/">Kotlin</OuterLink>
                    과 PHP 7,{' '}
                    <OuterLink href="https://mariadb.org/">MariaDB</OuterLink>를
                    사용해 제작하고 있으며, 점차{' '}
                    <OuterLink href="https://nodejs.org/">Node.js</OuterLink>로
                    마이그레이션하고 있습니다.{' '}
                    <OuterLink href="https://www.nginx.com/">NGINX</OuterLink>를
                    사용하고 있습니다.
                  </li>
                  <li>
                    서버는{' '}
                    <OuterLink href="https://aws.amazon.com/ko/">AWS</OuterLink>
                    를 사용하고 있으며, AWS 서비스 중에서도 EC2, RDS, S3, SQS,
                    Lambda를 주로 사용하고 있습니다.
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
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <OuterLink href="https://ucpc.me">
                <b>전국 대학생 프로그래밍 대회 동아리 연합</b>
              </OuterLink>{' '}
              前 회장<Descrption>, 2020. 4 &ndash; 2021. 1</Descrption>
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
              前 학회장<Descrption>, 2019. 1 &ndash; 2019. 12</Descrption>
              <Collapse shown={state.detailsShown}>
                <p>
                  서강대학교의 알고리즘 문제해결 동아리입니다. 알고리즘 스터디를
                  진행하고, 학회 전반을 운영했습니다.
                </p>
                <Space h="2em" />
              </Collapse>
            </li>
            <li>
              <OuterLink href="https://codeforces.com/profile/shiftpsh">
                Codeforces
              </OuterLink>{' '}
              최고 레이팅 2,117 (Master)
              <Collapse shown={state.detailsShown}>
                {/* TODO load information automatically */}
                <p>
                  러시아 기반의 프로그래밍 대회 플랫폼입니다. 레이팅 2,117은
                  활동하는 유저 중 상위 {numberFormat((2664 / 99392) * 100, 2)}
                  %에 해당됩니다.
                </p>
                <Space h="2em" />
              </Collapse>
            </li>
            <Collapse shown={state.detailsShown} as="li">
              <OuterLink href="https://atcoder.jp/users/shiftpsh">
                AtCoder
              </OuterLink>{' '}
              최고 레이팅 1,874 (1級)
              {/* TODO load information automatically */}
              <p>
                일본 기반의 프로그래밍 대회 플랫폼입니다. 레이팅 1,874는
                활동하는 유저 중 상위 {numberFormat((1605 / 71529) * 100, 2)}
                %에 해당됩니다.
              </p>
              <Space h="2em" />
            </Collapse>
            <li>
              프로그래밍 대회 다수 출제 및 검수
              <Collapse shown={state.detailsShown}>
                <ProfileList>
                  <li>
                    <b>UCPC 2020</b> 전국 대학생 프로그래밍 대회 동아리 연합
                    대회 &mdash; 운영 및 출제 총괄
                  </li>
                  <li>
                    <b>SPC 2019</b> 서강대학교 프로그래밍 대회 &mdash; 운영 및
                    출제 총괄
                  </li>
                  <li>
                    <b>SUAPC 2021w</b> 신촌지역 대학생 프로그래밍 대회 동아리
                    연합 대회 &mdash; 출제
                  </li>
                  <li>
                    <b>SUAPC 2020</b> 신촌지역 대학생 프로그래밍 대회 동아리
                    연합 대회 &mdash; 출제
                  </li>
                  <li>
                    <b>SNUPC 2020</b> 서울대학교 프로그래밍 경시대회 &mdash;
                    검수
                  </li>
                  <li>
                    <b>SPC 2020</b> 서강대학교 프로그래밍 대회 &mdash; 검수
                  </li>
                  <li>
                    <b>2020 Uni-CODE</b> UNIST 프로그래밍 대회 &mdash; 검수
                  </li>
                </ProfileList>
                <Space h="2em" />
              </Collapse>
            </li>
            <Collapse shown={state.detailsShown} as="li">
              고려대학교 해커톤 KOREA HACKS 2021 멘토
              <p>
                Android와 웹 프론트엔드 분야에서 해커톤 참여 팀들의 질문들을
                해결해 주는 등의 업무를 수행했습니다.
              </p>
            </Collapse>
          </ProfileList>
          <Space h="2em" />
        </Article>
      </ContentPadding>
    </>
  )
}

export default ShiftAsADeveloper
