import styled from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.secondary

const color = ({ theme }) => theme.colors.primary

const Label = styled.label`
  font-family: ${fontFamily};
  color: ${color};
`

export default Label
