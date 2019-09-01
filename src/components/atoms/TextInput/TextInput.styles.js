import styled from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.secondary

const darkColor = ({ theme }) => theme.colors.dark

export const StyledInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder
}))`
  font-size: 2rem;
  padding: 1rem;
  width: 83rem;
  color: ${darkColor};
  font-family: ${fontFamily};
  outline: none;
  border-radius: .6rem;
  border: 1px solid ${darkColor};
`
