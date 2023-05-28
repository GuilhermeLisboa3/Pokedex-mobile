import { Container, Title, Image, ContainerInputs, TextLink, NavigationLink } from './styles'
import { Input, Button } from '@/application/components'
import { type Validator } from '@/application/validation'
import logo from '@/application/assets/pokedexLogo.png'

import { KeyboardAvoidingView, SafeAreaView, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {
  validator: Validator
}

export const SignUp: React.FC<Props> = ({ validator }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  useEffect(() => { validator.validate('name', { name }) }, [name])
  useEffect(() => { validator.validate('email', { email }) }, [email])
  useEffect(() => { validator.validate('password', { password }) }, [password])
  useEffect(() => { validator.validate('passwordConfirmation', { password, passwordConfirmation }) }, [password, passwordConfirmation])

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
              <Input setChange={setName} testID='name' isError={'error'} iconLeft iconNames={'user'} iconSize={20} placeholder='Digite seu nome'/>
              <Input setChange={setEmail} testID='email' isError={'error'} iconLeft iconNames={'mail'} iconSize={20} placeholder='Digite seu email'/>
              <Input setChange={setPassword} testID='password' isError={'error'} iconLeft iconNames={'lock'} iconSize={20} placeholder='Digite sua senha' iconViewPassword secureTextEntry/>
              <Input setChange={setPasswordConfirmation} testID='passwordConfirmation' isError={'error'} iconLeft iconNames={'lock'} iconSize={20} placeholder='Confirme sua senha' iconViewPassword secureTextEntry/>
            </ContainerInputs>
            <Button width={150} height={40} text='Registrar' disabled/>
          <TextLink>Você tem conta? <NavigationLink>Entrar</NavigationLink></TextLink>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}
