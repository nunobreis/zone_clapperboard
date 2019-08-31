import styled from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary

export const StyledInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder
}))`
  padding: 1.5rem 2rem;
  font-size: 2rem;
  width: 100%;
  font-family: ${fontFamily};
`
