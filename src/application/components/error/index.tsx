import { Container, Image, View, Text, Images, Button } from './styles'
import lucario from '@/application/assets/lucario.png'
import machoke from '@/application/assets/machoke.png'

import React from 'react'

type Props = { reload: () => void, error: string }

export const Error: React.FC<Props> = ({ error, reload }) => {
  return (
    <Container>
      <Images>
        <Image source={lucario} resizeMode='stretch'/>
        <Image source={machoke} resizeMode='stretch'/>
      </Images>
      <View>
        <Text>{error}</Text>
        <Button onPress={reload}>Tentar novamente</Button>
      </View>
    </Container>
  )
}
