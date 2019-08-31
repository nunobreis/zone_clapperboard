import { css } from 'styled-components'

const fontFamily = ({ theme }) => theme.fonts.primary || 'sans-serif'

const fontColor = ({ theme }) => theme.fonts.dark

const fontSizeLarge = ({ level }) => `${1.75 + 1 * (1 / level)}rem`

const biggerThanTablet = ({ theme }) => theme.device.tablet

export const styles = css`
  font-family: ${fontFamily};
  color: ${fontColor};
  margin: 0;

  @media ${biggerThanTablet} {
    font-size: ${fontSizeLarge};
  }
`
