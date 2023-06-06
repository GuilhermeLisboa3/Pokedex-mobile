import { Container, Image, View, Text, Images, Button } from './styles'
import lucario from '@/application/assets/lucario.png'
import machoke from '@/application/assets/machoke.png'

import React from 'react'

export const Error: React.FC = () => {
  return (
    <Container>
      <Images>
        <Image source={lucario} resizeMode='stretch'/>
        <Image source={machoke} resizeMode='stretch'/>
      </Images>
      <View>
        <Text>Algo deu errado. Tente novamente!</Text>
        <Button>Tentar novamente</Button>
      </View>
    </Container>
  )
}
