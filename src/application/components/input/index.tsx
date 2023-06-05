import React from 'react'
import { Text, type TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Container, TextInput } from './styles'

type Props = TextInputProps & {
  iconViewPassword?: boolean
  security?: boolean
  setSecurity?: React.Dispatch<React.SetStateAction<boolean>>
  iconLeft?: boolean
  iconNames?: keyof typeof Feather.glyphMap
  iconSize?: number
  iconColor?: string
  setChange: React.Dispatch<React.SetStateAction<string>>
  testID: string
  isError: string | undefined
}

export const Input: React.FC<Props> = ({ isError, security, setSecurity, setChange, testID, iconColor, iconLeft, iconNames, iconViewPassword, iconSize, ...res }) => {
  return (
  <Container isError={isError} testID={`container-${testID}`}>
    { iconLeft ? <Text><Feather name={iconNames} size={iconSize} color={isError ? '#fd4f55' : '#198754'}/></Text> : '' }
    <TextInput
      {...res}
      testID={`input-${testID}`}
      selectionColor='black'
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={e => { setChange(e) }}/>
    { iconViewPassword
      ? <Text onPress={() => { setSecurity!(!security) }} accessibilityRole='button'>
          <Feather name={security ? 'eye-off' : 'eye'} size={iconSize} color={'black'}/>
        </Text>
      : ''
    }
  </Container>
  )
}
