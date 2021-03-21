import styled from '@emotion/styled'
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  maxWidth,
  minWidth,
  minHeight,
  flexbox,
  border,
  display,
  typography,
  position,
  shadow,
  fontFamily
} from 'styled-system'

export const Image = (props) => (
  <Box as='img' {...props} />
)

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${maxWidth}
  ${minWidth}
  ${minHeight}
  ${flexbox}
  ${border}
  ${typography}
  ${position}
  ${shadow}
  ${display}
  `
  export const Header = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${maxWidth}
  ${flexbox}
  ${border}
  ${typography}
  ${position}
  `
  export const A = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${border}
  ${typography}
  ${display}
  ${shadow}
  `
  export const Flex = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${maxWidth}
  ${flexbox}
  ${border}
  ${display}
  ${typography}
  ${position}
`

export const Text = styled.div`
  ${space}
  ${fontFamily}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${border}
`
