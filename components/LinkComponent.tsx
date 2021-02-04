import styled from 'styled-components'
import useShadowLightCoordinates from '../hooks/ShadowLightCoordinates'
import { castShadow } from '../styles/ShiftTheme'
import LinkItem from '../types/LinkItem'
import OuterLink from './OuterLink'

const LinkIcon = styled.img`
  transform: scale(1);
  transition: transform 0.3s ease;
`
const LinkIconContainer = styled.div`
  width: 6em;
  height: 6em;
  border-radius: 1em;
  margin-bottom: 1em;
  background: #fff;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.025);
    ${LinkIcon} {
      transform: scale(1.1);
    }
  }
`

const IconCaption = styled.div`
  font-weight: bold;
`

const IconDescription = styled.div``

const LinkComponent: React.FC<{ link: LinkItem }> = (props) => {
  const [shadowX, shadowY] = useShadowLightCoordinates()
  const { id, caption, description, href, iconFormat, color } = props.link
  return (
    <OuterLink
      href={href}
      style={{ background: 'inherit', textDecoration: 'none' }}
    >
      <LinkIconContainer
        style={{
          boxShadow: castShadow(color, shadowX, shadowY, 2),
          background: color.toString(),
        }}
      >
        <LinkIcon src={`/res/icons/${id}.${iconFormat ?? 'svg'}`} />
      </LinkIconContainer>
      <IconCaption>{caption}</IconCaption>
      <IconDescription>{description}</IconDescription>
    </OuterLink>
  )
}

export default LinkComponent
