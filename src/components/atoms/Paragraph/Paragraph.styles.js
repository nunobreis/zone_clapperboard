import { css } from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary || 'sans-serif'

const textColor = ({ theme }) => theme.colors.dark

export const paragraphStyles = css`
  font-family: ${fontFamily};
  color: ${textColor};
`
