import { Container, Title, Image, ContainerInputs, TextLink, NavigationLink } from './styles'
import { Input, Button } from '@/application/components'
import logo from '@/application/assets/pokedexLogo.png'

import { KeyboardAvoidingView, SafeAreaView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'

export const Login: React.FC = () => {
  const [, setEmail] = useState('')
  const [, setPassword] = useState('')

  return (
    <>
    <Container>
      <SafeAreaView>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
          <ScrollView>
            <Title>Seja bem vindo(a) {'\n'} a Pokedex Pokemon</Title>
            <Image source={logo} resizeMode='stretch'/>
            <ContainerInputs>
              <Input setChange={setEmail} testID='email' isError={undefined} iconLeft iconNames={'mail'} iconSize={20} placeholder='Digite seu email'/>
              <Input setChange={setPassword} testID='password' isError={undefined} iconLeft iconNames={'lock'} iconSize={20} placeholder='Digite sua senha' iconViewPassword secureTextEntry/>
            </ContainerInputs>
            <Button onSubmit={async () => {}} width={150} height={40} text='Entrar' disabled/>
            <TextLink>Você tem conta? <NavigationLink>Registrar</NavigationLink></TextLink>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Container>
    </>
  )
}
