import styled from 'styled-components'

const backgroundColor = ({ theme }) => theme.colors.primary

const textColor = ({ theme }) => theme.colors.light

const fontFamily = ({ theme }) => theme.fonts.primary

export const StyledButton = styled.button`
  background-color: ${backgroundColor};
  color: ${textColor};
  font-family: ${fontFamily};
  font-size: 2rem;
  padding: 1rem 1.5rem;
  border-radius: .6rem;
  outline: none;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`
