import { ReactHTML, useLayoutEffect, useRef, useState } from 'react'

interface Props {
  shown: boolean
  as?: keyof ReactHTML
}

interface State {
  contentHeight: number
  prevShown: boolean
  propChangedAt: Date
}

const Collapse: React.FC<Props> = (props) => {
  const contentsRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<State>({
    contentHeight: 0,
    prevShown: false,
    propChangedAt: new Date(0),
  })

  useLayoutEffect(() => {
    if (contentsRef.current === null) return
    setState((prevState) => ({
      ...prevState,
      contentHeight: contentsRef.current?.clientHeight ?? 0,
    }))
  }, [props.children])

  useLayoutEffect(() => {
    if (props.shown && !state.prevShown) {
      const delay = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          prevShown: props.shown,
        }))
      }, 300)
      return () => clearTimeout(delay)
    } else {
      const delay = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          prevShown: props.shown,
        }))
      }, 100)
      return () => clearTimeout(delay)
    }
  }, [props.shown])

  const containerHeight =
    state.prevShown && props.shown
      ? 'auto'
      : state.prevShown || props.shown
      ? state.contentHeight
      : 0

  const RenderComponent = props.as ?? 'div'

  return (
    <RenderComponent
      style={{
        height: containerHeight,
        transformOrigin: 'top',
        opacity: state.prevShown || props.shown ? 1 : 0,
        transition: `height .3s ease, opacity .3s ease`,
      }}
    >
      <div ref={contentsRef}>{props.children}</div>
    </RenderComponent>
  )
}

export default Collapse
