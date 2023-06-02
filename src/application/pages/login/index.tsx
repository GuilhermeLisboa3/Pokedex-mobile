import { Title, Image, ContainerInputs, TextLink, NavigationLink } from './styles'
import { Input, Button } from '@/application/components'
import { ContainerForm } from '@/application/layouts'
import logo from '@/application/assets/pokedexLogo.png'

import React, { useState } from 'react'

export const Login: React.FC = () => {
  const [, setEmail] = useState('')
  const [, setPassword] = useState('')

  return (
    <>
      <ContainerForm>
        <>
          <Title>Seja bem vindo(a) {'\n'} a Pokedex Pokemon</Title>
          <Image source={logo} resizeMode='stretch'/>
          <ContainerInputs>
            <Input setChange={setEmail} testID='email' isError={'error'} iconLeft iconNames={'mail'} iconSize={20} placeholder='Digite seu email'/>
            <Input setChange={setPassword} testID='password' isError={'error'} iconLeft iconNames={'lock'} iconSize={20} placeholder='Digite sua senha' iconViewPassword secureTextEntry/>
          </ContainerInputs>
          <Button onSubmit={async () => {}} width={150} height={40} text='Entrar' disabled/>
          <TextLink>Você tem conta? <NavigationLink>Registrar</NavigationLink></TextLink>
        </>
      </ContainerForm>
    </>
  )
}
