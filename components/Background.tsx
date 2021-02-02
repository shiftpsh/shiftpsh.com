import { useLayoutEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { ShiftTheme } from '../styles/ShiftTheme'

const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const BackgroundSvg = styled.svg`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  max-width: 100%;
`

interface State {
  clientX: number
  clientY: number
  viewportX: number
  viewportY: number
}

const Background: React.FC = (props) => {
  const theme = useTheme() as ShiftTheme
  const [state, setState] = useState<State>({
    clientX: 0,
    clientY: 0,
    viewportX: 1,
    viewportY: 1,
  })

  useLayoutEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setState((prevState) => ({ ...prevState, clientX, clientY }))
    }
    const onScreenResize = () => {
      const { innerHeight: viewportX, innerWidth: viewportY } = window
      setState((prevState) => ({ ...prevState, viewportX, viewportY }))
    }
    // Initial call
    onScreenResize()
    document.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onScreenResize)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onScreenResize)
    }
  }, [])

  // Relative coordinates are calculated as follows:

  // 1. Put viewport in a square container;
  const viewportSize = Math.max(state.viewportX, state.viewportY)

  // 2. Calculate pointer coordinates relative to the square container;
  const pointerX =
    state.viewportX > state.viewportY
      ? state.clientX
      : state.clientX + (viewportSize - state.viewportX) / 2
  const pointerY =
    state.viewportY > state.viewportX
      ? state.clientY
      : state.clientY + (viewportSize - state.viewportY) / 2

  // 3. Set center to (0, 0) and square vertices to (+-1, +-1);
  const relativeX = Math.max(-1, Math.min(1, (pointerX / viewportSize) * 2 - 1))
  const relativeY = Math.max(-1, Math.min(1, (pointerY / viewportSize) * 2 - 1))

  const interpolate = (v: number) => {
    return Math.pow(Math.abs(v), 0.5) * Math.sign(v)
  }

  return (
    <BackgroundContainer>
      <BackgroundSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 640"
        style={{
          transform: `translate(calc(${interpolate(relativeX) * 2}em + 30%), ${
            interpolate(relativeY) * 2 + 0.1
          }em)`,
          filter: 'blur(1vmax)',
        }}
      >
        <g id="svg-bg-paths">
          <path
            x="420"
            y="270"
            id="svg-main-path"
            transform="translate(0 80) rotate(0 420 270)"
            d="M770.2 332.3L465.5 27.6A93.8 93.8 0 0 0 407.9.4q-4.5-.4-9-.4a94 94 0 0 0-66.6 27.6L27.6 332.3a94.2 94.2 0 0 0 0 133.2 94.2 94.2 0 0 0 133.2 0l238-238.2L579.6 408l57.5 57.5a94.2 94.2 0 0 0 133.2-133.2z"
            fill={theme.textColor.alpha(0.1).toString()}
          ></path>
        </g>
      </BackgroundSvg>
      <BackgroundSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 640"
        style={{
          transform: `translate(calc(${interpolate(
            relativeX
          )}em + 30%), ${interpolate(relativeY)}em)`,
        }}
      >
        <g id="svg-bg-paths">
          <path
            x="420"
            y="270"
            id="svg-main-path"
            transform="translate(0 80) rotate(0 420 270)"
            d="M770.2 332.3L465.5 27.6A93.8 93.8 0 0 0 407.9.4q-4.5-.4-9-.4a94 94 0 0 0-66.6 27.6L27.6 332.3a94.2 94.2 0 0 0 0 133.2 94.2 94.2 0 0 0 133.2 0l238-238.2L579.6 408l57.5 57.5a94.2 94.2 0 0 0 133.2-133.2z"
            fill={theme.backgroundColor.toString()}
          ></path>
        </g>
      </BackgroundSvg>
    </BackgroundContainer>
  )
}

export default Background
