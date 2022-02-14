import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: 1px solid ${({ theme }) => theme.textColor};
  background: transparent;
  font: inherit;
  padding: 8px 16px;
  min-height: 48px;
  transition: background 0.3s ease, color 0.3s ease;
  color: inherit;
  cursor: pointer;
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
const Button: React.FC<
  HTMLAttributes<HTMLButtonElement> & { type?: 'button' | 'submit' | 'reset' }
> = (props) => {
  return <ButtonContainer {...props} />
}

export default Button
