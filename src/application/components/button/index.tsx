import React from 'react'

import { Container, TextButton } from './styles'
import { type PressableProps } from 'react-native'

type Props = PressableProps & {
  width: number
  height: number
  disabled: boolean
  text: string
}

export const Button: React.FC<Props> = ({ disabled, height, width, text, ...props }) => {
  return (
    <Container {...props} width={width} height={height} accessibilityRole='button' disabled={disabled}>
      <TextButton disabled={disabled}>{text}</TextButton>
    </Container>
  )
}
