interface Props {
  shown: boolean
}

const Details: React.FC<Props> = (props) => {
  if (!props.shown) return null
  return <>{props.children}</>
}

export default Details
