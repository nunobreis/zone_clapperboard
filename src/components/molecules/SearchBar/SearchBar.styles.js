import styled from 'styled-components'

import Label from '../../atoms/Label/Label'

import Button from '../../atoms/Button/Button'
import TextInput from '../../atoms/TextInput/TextInput'

const fontFamily = ({ theme }) => theme.fonts.primary

export const Wrapper = styled.div`
  width: 100%;
  margin: 2rem auto;

  & > form {
    width: 100%;
    display: flex;
    margin-top: 1rem;
  }
`

export const StyledLabel = styled(Label)`
  display: block;
  text-transform: Capitalize;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: ${fontFamily};
`

export const StyledButton = styled(Button)`
  border-radius: 0 .6rem .6rem 0;
  padding: 1rem 3rem;
`

export const StyledTextInput = styled(TextInput)`
  border-radius: .6rem 0 0 .6rem;
  border: none;
  width: 100%;
`
