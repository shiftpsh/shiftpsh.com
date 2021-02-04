import { useLayoutEffect, useState } from 'react'

interface State {
  clientX: number
  clientY: number
  interpolatedX: number
  interpolatedY: number
  viewportX: number
  viewportY: number
}

const useShadowLightCoordinates = () => {
  const [state, setState] = useState<State>({
    clientX: 0,
    clientY: 0,
    interpolatedX: 0,
    interpolatedY: 0,
    viewportX: 1,
    viewportY: 1,
  })

  useLayoutEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setState((prevState) => ({ ...prevState, clientX, clientY }))
    }
    const onScreenResize = () => {
      const { innerHeight: viewportY, innerWidth: viewportX } = window
      setState((prevState) => ({ ...prevState, viewportX, viewportY }))
    }
    const interpolateFrames = () => {
      setState((prevState) => ({
        ...prevState,
        interpolatedX: prevState.interpolatedX * 0.9 + prevState.clientX * 0.1,
        interpolatedY: prevState.interpolatedY * 0.9 + prevState.clientY * 0.1,
      }))
    }

    // Initial call
    onScreenResize()

    const interval = setInterval(interpolateFrames, 16)
    document.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onScreenResize)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onScreenResize)
      clearInterval(interval)
    }
  }, [])

  // Relative coordinates are calculated as follows:

  // 1. Put viewport in a square container;
  const viewportSize = Math.max(state.viewportX, state.viewportY)

  // 2. Calculate pointer coordinates relative to the square container;
  const pointerX =
    state.viewportX > state.viewportY
      ? state.interpolatedX
      : state.interpolatedX + (viewportSize - state.viewportX) / 2
  const pointerY =
    state.viewportY > state.viewportX
      ? state.interpolatedY
      : state.interpolatedY + (viewportSize - state.viewportY) / 2

  // 3. Set center to (0, 0) and square vertices to (+-1, +-1);
  const relativeX = Math.max(-1, Math.min(1, (pointerX / viewportSize) * 2 - 1))
  const relativeY = Math.max(-1, Math.min(1, (pointerY / viewportSize) * 2 - 1))

  const interpolate = (v: number) => Math.pow(Math.abs(v), 0.5) * Math.sign(v)

  return [interpolate(relativeX), interpolate(relativeY) + 0.3]
}

export default useShadowLightCoordinates
