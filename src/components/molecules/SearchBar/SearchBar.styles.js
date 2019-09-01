import styled from 'styled-components'

import Label from '../../atoms/Label/Label'

const fontFamily = ({ theme }) => theme.fonts.primary

export const Wrapper = styled.div`
  width: 85rem;
`

export const StyledLabel = styled(Label)`
  text-transform: Capitalize;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: ${fontFamily};
`
