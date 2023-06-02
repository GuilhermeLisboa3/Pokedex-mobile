import { Title, Image, ContainerInputs, TextLink, NavigationLink } from './styles'
import { Input, Button, Toast } from '@/application/components'
import { ContainerForm } from '@/application/layouts'
import { type Validator } from '@/application/validation'
import { type Authentication } from '@/domain/use-cases/account'
import { AccountContext } from '@/application/contexts'
import logo from '@/application/assets/pokedexLogo.png'

import React, { useState, useEffect, useContext } from 'react'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'

type Props = { validator: Validator, authentication: Authentication }

export const Login: React.FC<Props> = ({ validator, authentication }) => {
  const { navigate } = useNavigation<StackNavigationProp <ParamListBase>>()
  const { setCurrentAccount } = useContext(AccountContext)
  const [security, setSecurity] = useState(true)
  const [toastMessage, setToastMessage] = useState('')
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [lodding, setLodding] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState<string | undefined>('')

  useEffect(() => { setEmailError(validator.validate('email', { email })) }, [email])
  useEffect(() => { setPasswordError(validator.validate('password', { password })) }, [password])

  const handleSubmit = async (): Promise<void> => {
    if (lodding || emailError || passwordError) return
    setLodding(true)
    try {
      const account = await authentication({ email, password })
      setCurrentAccount(account)
      navigate('Home')
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
            <Input setChange={setEmail} testID='email' isError={emailError} iconLeft iconNames={'mail'} iconSize={20} placeholder='Digite seu email'/>
            <Input setChange={setPassword} testID='password' isError={passwordError} iconLeft iconNames={'lock'} iconSize={20} placeholder='Digite sua senha' iconViewPassword setSecurity={setSecurity} security={security} secureTextEntry={security}/>
          </ContainerInputs>
          <Button onSubmit={handleSubmit} width={150} height={40} text='Entrar' disabled={!!emailError || !!passwordError}/>
          <TextLink>Você tem conta? <NavigationLink>Registrar</NavigationLink></TextLink>
        </>
      </ContainerForm>
      { toastIsOpen ? <Toast color='error' message={toastMessage} setIsOpen={setToastIsOpen}/> : ''}
    </>
  )
}
