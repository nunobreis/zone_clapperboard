import styled from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary

const darkColor = ({ theme }) => theme.colors.dark

export const StyledInput = styled.textarea.attrs({
  name: 'transcription content'
})`
  background: transparent;
  border: none;
  font-family: ${fontFamily};
  color: ${darkColor};
  font-weight: 400;
  font-size: 1.6rem;
  outline: none;
  width: 100%;
  resize: none;
`
