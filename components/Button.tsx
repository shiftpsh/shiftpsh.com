import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: 1px solid ${({ theme }) => theme.textColor};
  background: transparent;
  font: inherit;
  padding: 8px 16px;
  min-height: 48px;
  transition: background 0.3s ease, color 0.3s ease;
  color: inherit;
  &:hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.textColorInverted};
    & ::selection {
      color: ${({ theme }) => theme.textColor.toString()};
      background: ${({ theme }) =>
        theme.textColorInverted.alpha(0.5).toString()};
    }
  }
`
interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = (props) => {
  return (
    <ButtonContainer
      onClick={(e) => {
        if (props.onClick !== undefined) props.onClick(e)
      }}
    >
      {props.children}
    </ButtonContainer>
  )
}

export default Button
