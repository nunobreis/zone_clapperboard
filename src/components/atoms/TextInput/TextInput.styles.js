import styled from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary

const darkColor = ({ theme }) => theme.colors.dark

export const StyledInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder
}))`
  padding: 1rem;
  font-size: 2rem;
  min-width: 100%;
  color: ${darkColor};
  font-family: ${fontFamily};
  outline: none;
  border-radius: .6rem;
  border: 1px solid ${darkColor};
`
