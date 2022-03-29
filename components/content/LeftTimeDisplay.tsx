import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
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

interface Props {
  startAt: Date
  endAt: Date
}

const LeftTimeDisplay: React.FC<Props> = ({ startAt, endAt }) => {
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

  const totalTime = useMemo(
    () => endAt.getTime() - startAt.getTime(),
    [startAt, endAt]
  )

  const leftTime = endAt.getTime() - state.currentTime.getTime()
  const digitAnimationProgress = Math.max(
    0,
    Math.min(
      1,
      (state.currentTime.getTime() - state.timeHoveredAt.getTime()) / 300
    )
  )

  const interpolate = useCallback((v: number) => 1 - (1 - v) * (1 - v), [])

  const digits = useCallback(
    (min: number, max: number) =>
      state.timeHover
        ? min + (max - min) * interpolate(digitAnimationProgress)
        : max - (max - min) * interpolate(digitAnimationProgress),
    [state.timeHover, digitAnimationProgress]
  )

  const leftTimeBaseDigits = (n: number) => {
    if (n <= 0) return 0
    if (n >= 200) return 0
    if (n >= 20) return 1
    if (n >= 2) return 2
    if (n >= 0.2) return 3
    return 4
  }

  const percentBaseDigits = (n: number) => {
    if (n >= 100) return 0
    if (n < 80) return 2
    if (n < 98) return 3
    if (n < 99.8) return 4
    if (n < 99.98) return 5
    if (n < 99.998) return 6
    return 7
  }

  const leftDate = Math.min(0, -leftTime) / 1000 / 60 / 60 / 24
  const leftPercent = Math.max(
    0,
    Math.min(100, (1 - leftTime / totalTime) * 100)
  )

  return (
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
          leftPercent,
          digits(
            0 + percentBaseDigits(leftPercent),
            6 + percentBaseDigits(leftPercent)
          )
        )}
      </LeftTime>
      %,{' '}
      <LeftTime>
        {numberFormat(
          leftDate,
          digits(
            0 + leftTimeBaseDigits(-leftDate),
            4 + leftTimeBaseDigits(-leftDate)
          )
        )}
      </LeftTime>
      일
    </span>
  )
}

export default LeftTimeDisplay
