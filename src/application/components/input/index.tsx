import React from 'react'
import { Text, type TextInputProps } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

import { Container, TextInput } from './styles'

type Props = TextInputProps & {
  iconViewPassword?: boolean
  iconLeft?: boolean
  iconNames?: keyof typeof Icon.glyphMap
  iconSize?: number
  iconColor?: string
  testID: string
  isError: string | undefined
}

export const Input: React.FC<Props> = ({ isError, testID, iconColor, iconLeft, iconNames, iconViewPassword, iconSize, ...res }) => {
  return (
  <Container isError={isError} testID={`container-${testID}`}>
    { iconLeft ? <Text><Icon name={iconNames} size={iconSize} color={isError ? '#fd4f55' : '#198754'}/></Text> : '' }
    <TextInput
      {...res}
      selectionColor='black'
      autoCorrect={false}
      autoCapitalize="none"/>
    { iconViewPassword
      ? <Text>
          <Icon name='eye-off' size={iconSize} color={'black'}/>
        </Text>
      : ''
    }
  </Container>
  )
}
