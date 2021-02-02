import { AnchorHTMLAttributes } from 'react'

const OuterLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  return <a {...props} target="_blank" rel="noopener noreferrer" />
}

export default OuterLink
