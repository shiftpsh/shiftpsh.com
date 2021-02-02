interface Props {
  h?: number | string
  w?: number | string
}

const Space: React.FC<Props> = (props) => {
  return <div style={{ width: props.w, height: props.h }} />
}

export default Space
