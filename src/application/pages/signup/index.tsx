import { Container, Title, Image, ContainerInputs, TextLink, NavigationLink } from './styles'
import { Input, Button } from '@/application/components'
import logo from '@/application/assets/pokedexLogo.png'

import { KeyboardAvoidingView, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'

export const SignUp: React.FC = () => {
  return (
  <SafeAreaView>
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
    >
      <ScrollView>
        <Container>
          <Title>Seja bem vindo(a) {'\n'} a Pokedex Pokemon</Title>
          <Image source={logo} resizeMode='stretch'/>
            <ContainerInputs>
              <Input testID='name' isError={'error'} iconLeft iconNames={'user'} iconSize={20} placeholder='Digite seu nome'/>
              <Input testID='email' isError={'error'} iconLeft iconNames={'mail'} iconSize={20} placeholder='Digite seu email'/>
              <Input testID='password' isError={'error'} iconLeft iconNames={'lock'} iconSize={20} placeholder='Digite sua senha' iconViewPassword secureTextEntry/>
              <Input testID='passwordConfirmation' isError={'error'} iconLeft iconNames={'lock'} iconSize={20} placeholder='Confirme sua senha' iconViewPassword secureTextEntry/>
            </ContainerInputs>
            <Button width={150} height={40} text='Registrar' disabled/>
          <TextLink>Você tem conta? <NavigationLink>Entrar</NavigationLink></TextLink>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}
