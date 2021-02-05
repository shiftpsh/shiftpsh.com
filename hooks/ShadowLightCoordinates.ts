import { useLayoutEffect, useState } from 'react'

interface State {
  clientX: number
  clientY: number
  interpolatedX: number
  interpolatedY: number
  viewportX: number
  viewportY: number
  motionEnabled: boolean
}

const useShadowLightCoordinates = () => {
  const [state, setState] = useState<State>({
    clientX: 0,
    clientY: 0,
    interpolatedX: 0,
    interpolatedY: 0,
    viewportX: 1,
    viewportY: 1,
    motionEnabled: false,
  })

  useLayoutEffect(() => {
    const initialize = () => {
      const { innerHeight: viewportY, innerWidth: viewportX } = window
      setState((prevState) => ({
        ...prevState,
        viewportX,
        viewportY,
        clientX: viewportX / 2,
        clientY: viewportY / 2,
        interpolatedX: viewportX / 2,
        interpolatedY: viewportY / 2,
      }))
    }
    const onMouseMove = (e: MouseEvent) => {
      if (state.motionEnabled) return
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
        interpolatedX:
          prevState.interpolatedX * (prevState.motionEnabled ? 0.95 : 0.9) +
          prevState.clientX * (prevState.motionEnabled ? 0.05 : 0.1),
        interpolatedY:
          prevState.interpolatedY * (prevState.motionEnabled ? 0.95 : 0.9) +
          prevState.clientY * (prevState.motionEnabled ? 0.05 : 0.1),
      }))
    }
    const onMotion = (ev: DeviceMotionEvent) => {
      if (ev.rotationRate === null) return
      const { alpha, beta, gamma } = ev.rotationRate
      if (alpha === null || beta === null || gamma === null) return
      setState((prevState) => ({
        ...prevState,
        motionEnabled: true,
        clientX: Math.max(
          0,
          Math.min(
            prevState.viewportX,
            -(beta / 60) * prevState.viewportX + prevState.viewportX / 2
          )
        ),
        clientY: Math.max(
          0,
          Math.min(
            prevState.viewportY,
            -(alpha / 60) * prevState.viewportY + prevState.viewportY / 2
          )
        ),
      }))
    }

    // Initial call
    initialize()

    const interval = setInterval(interpolateFrames, 16)
    document.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onScreenResize)
    window.addEventListener('devicemotion', onMotion)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onScreenResize)
      window.removeEventListener('devicemotion', onMotion)
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

  const interpolate = (v: number) => Math.asin(-v)

  return [interpolate(relativeX), interpolate(relativeY) + 0.3]
}

export default useShadowLightCoordinates
