import React from 'react'

import { Container, Link, Name, Navigate } from './styles'
import { FontAwesome5 } from '@expo/vector-icons'
import { Linking } from 'react-native'

export const Footer: React.FC = () => {
  const openLink = async (link: string): Promise<void> => await Linking.openURL(link)
  return (
    <Container>
      <Name> <FontAwesome5 name='copyright' size={20} color='black'/> Guilherme Gonçalves Lisboa</Name>
      <Navigate>
        <Link testID='link' onPress={() => { openLink('https://www.linkedin.com/in/guilherme-gon%C3%A7alves-lisboa-abb8b0227/') }}><FontAwesome5 name='linkedin-in' size={20} color='white'/></Link>
        <Link testID='link' onPress={() => { openLink('https://github.com/GuilhermeLisboa3') }}><FontAwesome5 name='github' size={20} color='white'/></Link>
        <Link testID='link' onPress={() => { openLink('https://www.instagram.com/guime.lisboa/') }}><FontAwesome5 name='instagram' size={20} color='white'/></Link>
      </Navigate>
    </Container>
  )
}
