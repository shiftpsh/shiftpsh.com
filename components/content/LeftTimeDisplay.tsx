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
          Math.max(0, Math.min(100, (1 - leftTime / totalTime) * 100)),
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
  )
}

export default LeftTimeDisplay
