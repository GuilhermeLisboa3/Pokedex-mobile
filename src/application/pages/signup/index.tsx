import { Container, Title, Image, ContainerInputs, TextLink, NavigationLink } from './styles'
import { Input, Button } from '@/application/components'
import { type Validator } from '@/application/validation'
import { type AddAccount } from '@/domain/use-cases/account'
import logo from '@/application/assets/pokedexLogo.png'

import { KeyboardAvoidingView, SafeAreaView, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {
  validator: Validator
  addAccount: AddAccount
}

export const SignUp: React.FC<Props> = ({ validator, addAccount }) => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState<string | undefined>('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | undefined>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<string | undefined>('')

  useEffect(() => { setNameError(validator.validate('name', { name })) }, [name])
  useEffect(() => { setEmailError(validator.validate('email', { email })) }, [email])
  useEffect(() => { setPasswordError(validator.validate('password', { password })) }, [password])
  useEffect(() => { setPasswordConfirmationError(validator.validate('passwordConfirmation', { password, passwordConfirmation })) }, [password, passwordConfirmation])

  const handleSubmit = async (): Promise<void> => {
    await addAccount({ name, email, password })
  }

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
              <Input setChange={setName} testID='name' isError={nameError} iconLeft iconNames={'user'} iconSize={20} placeholder='Digite seu nome'/>
              <Input setChange={setEmail} testID='email' isError={emailError} iconLeft iconNames={'mail'} iconSize={20} placeholder='Digite seu email'/>
              <Input setChange={setPassword} testID='password' isError={passwordError} iconLeft iconNames={'lock'} iconSize={20} placeholder='Digite sua senha' iconViewPassword secureTextEntry/>
              <Input setChange={setPasswordConfirmation} testID='passwordConfirmation' isError={passwordConfirmationError} iconLeft iconNames={'lock'} iconSize={20} placeholder='Confirme sua senha' iconViewPassword secureTextEntry/>
            </ContainerInputs>
            <Button onSubmit={handleSubmit} width={150} height={40} text='Registrar' disabled={!!nameError || !!emailError || !!passwordError || !!passwordConfirmationError}/>
          <TextLink>Você tem conta? <NavigationLink>Entrar</NavigationLink></TextLink>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}
