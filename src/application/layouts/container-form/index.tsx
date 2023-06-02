import { Container } from './styles'

import { KeyboardAvoidingView, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'

type Props = { children: JSX.Element }

export const ContainerForm: React.FC<Props> = ({ children }) => {
  return (
    <>
    <Container>
      <SafeAreaView>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
          <ScrollView>{children}</ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Container>
    </>
  )
}
