import { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { ShiftTheme } from '../../styles/ShiftTheme'
import { numberFormat } from '../../utils/Formatting'

const LeftTime = styled.span`
  font-family: ${({ theme }) => (theme as ShiftTheme).monospaceFontFamily};
`

interface LeftTimeDisplayState {
  currentTime: Date
  timeHover: boolean
  timeHoveredAt: Date
}

const LeftTimeDisplay: React.FC = () => {
  const [state, setState] = useState<LeftTimeDisplayState>({
    currentTime: new Date(),
    timeHover: false,
    timeHoveredAt: new Date(0),
  })

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => ({ ...prevState, currentTime: new Date() }))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const totalTime =
    new Date(2022, 5 - 1, 29, 0).getTime() -
    new Date(2020, 6 - 1, 22, 10).getTime()
  const leftTime =
    new Date(2022, 4, 29, 0).getTime() - state.currentTime.getTime()
  const digitAnimationProgress = Math.max(
    0,
    Math.min(
      1,
      (state.currentTime.getTime() - state.timeHoveredAt.getTime()) / 300
    )
  )
  const interpolate = (v: number) => 1 - (1 - v) * (1 - v)

  return (
    <p>
      산업기능요원으로 복무 중 &mdash;{' '}
      <span
        onPointerEnter={() =>
          setState((prevState) => ({
            ...prevState,
            timeHover: true,
            timeHoveredAt: new Date(),
          }))
        }
        onPointerLeave={() =>
          setState((prevState) => ({
            ...prevState,
            timeHover: false,
            timeHoveredAt: new Date(),
          }))
        }
      >
        <LeftTime>
          {numberFormat(
            (1 - leftTime / totalTime) * 100,
            state.timeHover
              ? 2 + 6 * interpolate(digitAnimationProgress)
              : 8 - 6 * interpolate(digitAnimationProgress)
          )}
        </LeftTime>
        %,{' '}
        <LeftTime>
          {numberFormat(
            Math.min(0, -leftTime) / 1000 / 60 / 60 / 24,
            state.timeHover
              ? 4 * interpolate(digitAnimationProgress)
              : 4 - 4 * interpolate(digitAnimationProgress)
          )}
        </LeftTime>
        일
      </span>
    </p>
  )
}

export default LeftTimeDisplay
