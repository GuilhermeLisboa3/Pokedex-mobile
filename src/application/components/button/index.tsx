import React from 'react'

import { Container, TextButton } from './styles'

type Props = {
  width: number
  height: number
  disabled: boolean
  text: string
  onSubmit?: () => Promise<void>
}

export const Button: React.FC<Props> = ({ onSubmit, disabled, height, width, text, ...props }) => {
  return (
    <Container {...props} width={width} height={height} accessibilityRole='button' disabled={disabled} onPress={onSubmit}>
      <TextButton disabled={disabled}>{text}</TextButton>
    </Container>
  )
}
