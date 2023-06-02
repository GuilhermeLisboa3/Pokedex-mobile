import { Title, Image, ContainerInputs, TextLink, NavigationLink } from './styles'
import { Input, Button, Toast } from '@/application/components'
import { ContainerForm } from '@/application/layouts'
import { type Validator } from '@/application/validation'
import { type AddAccount } from '@/domain/use-cases/account'
import logo from '@/application/assets/pokedexLogo.png'

import React, { useEffect, useState } from 'react'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'

type Props = {
  validator: Validator
  addAccount: AddAccount
}

export const SignUp: React.FC<Props> = ({ validator, addAccount }) => {
  const { navigate } = useNavigation<StackNavigationProp <ParamListBase>>()
  const [toastMessage, setToastMessage] = useState('')
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [lodding, setLodding] = useState(false)
  const [security, setSecurity] = useState(true)
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
    if (lodding || nameError || emailError || passwordError || passwordConfirmationError) return
    setLodding(true)
    try {
      await addAccount({ name, email, password })
      navigate('Login')
    } catch (error: any) {
      setToastMessage(error.message)
      setToastIsOpen(true)
      setLodding(false)
    }
  }

  return (
    <>
    <ContainerForm>
      <>
        <Title>Seja bem vindo(a) {'\n'} a Pokedex Pokemon</Title>
        <Image source={logo} resizeMode='stretch'/>
        <ContainerInputs>
          <Input setChange={setName} testID='name' isError={nameError} iconLeft iconNames={'user'} iconSize={20} placeholder='Digite seu nome'/>
          <Input setChange={setEmail} testID='email' isError={emailError} iconLeft iconNames={'mail'} iconSize={20} placeholder='Digite seu email'/>
          <Input security={ security} setSecurity={setSecurity} setChange={setPassword} testID='password' isError={passwordError} iconLeft iconNames={'lock'} iconSize={20} placeholder='Digite sua senha' iconViewPassword secureTextEntry={security}/>
          <Input security={ security} setSecurity={setSecurity} setChange={setPasswordConfirmation} testID='passwordConfirmation' isError={passwordConfirmationError} iconLeft iconNames={'lock'} iconSize={20} placeholder='Confirme sua senha' iconViewPassword secureTextEntry={security}/>
        </ContainerInputs>
        <Button onSubmit={handleSubmit} width={150} height={40} text='Registrar' disabled={!!nameError || !!emailError || !!passwordError || !!passwordConfirmationError}/>
        <TextLink>Você tem conta? <NavigationLink onPress={() => { navigate('Login') }}>Entrar</NavigationLink></TextLink>
      </>
    </ContainerForm>
    { toastIsOpen ? <Toast color='error' message={toastMessage} setIsOpen={setToastIsOpen}/> : ''}
    </>
  )
}
