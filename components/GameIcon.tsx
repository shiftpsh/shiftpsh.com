import styled from 'styled-components'
import useShadowLightCoordinates from '../hooks/ShadowLightCoordinates'
import ContentPadding from '../layouts/ContentPadding'
import { castShadow } from '../styles/ShiftTheme'
import LinkItem from '../types/LinkItem'
import OuterLink from './OuterLink'

const Border = styled(ContentPadding)`
  min-width: 100%;
  display: inline-flex;
  & > * {
    border-bottom: 1px solid ${({ theme }) => theme.textColor.toString()};
  }
  &:last-child {
    & > * {
      border-bottom: inherit;
    }
  }
`

const GameIconRow = styled.div`
  min-height: 72px;
  min-width: 100%;
  position: relative;
  display: inline-flex;
  padding: 1em 0;
`

const LinkIconSizer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 4em;
`

const LinkIcon = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform 0.3s ease;
`
const LinkIconShadow = styled.div`
  position: absolute;
  width: 3.2em;
  height: 3.2em;
  left: 0.4em;
  top: 0.4em;
  border-radius: 1em;
`
const LinkIconContainer = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 1em;
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
  width: 20ch;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 1em;
`

const IconDescription = styled.div`
  min-width: 20ch;
  flex-shrink: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-left: 1em;
  margin-right: 2em;
`

const GameIcon: React.FC<{ link: LinkItem }> = (props) => {
  const [shadowX, shadowY] = useShadowLightCoordinates()
  const { id, caption, description, href, iconFormat, color } = props.link

  const component = (
    <GameIconRow style={{ position: 'relative' }}>
      <LinkIconSizer>
        <LinkIconShadow
          style={{
            background: color.alpha(0.15).toString(),
            boxShadow: castShadow(color, 0, 0, 2 / 3, 2 / 3),
            transform: `translate(${shadowX * 0.7}em, ${shadowY * 0.7}em)`,
          }}
        />
        <LinkIconContainer
          style={{
            background: color.toString(),
          }}
        >
          <LinkIcon src={`/res/icons/${id}.${iconFormat ?? 'svg'}`} />
        </LinkIconContainer>
      </LinkIconSizer>
      <IconCaption>{caption}</IconCaption>
      <IconDescription>
        <div>{description}</div>
      </IconDescription>
    </GameIconRow>
  )

  if (href === undefined) return <Border>{component}</Border>

  return (
    <Border>
      <OuterLink
        href={href}
        style={{
          background: 'inherit',
          textDecoration: 'none',
          minWidth: '100%',
        }}
      >
        {component}
      </OuterLink>
    </Border>
  )
}

export default GameIcon
