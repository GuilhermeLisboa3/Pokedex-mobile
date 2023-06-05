import { Container, IconContainer, Card, Image, Id, Name, Types, Type } from './styles'

import { Feather } from '@expo/vector-icons'

export const CardPokemon: React.FC = () => {
  return (
    <>
    <Container>
      <IconContainer>
        <Feather name='heart' size={20} color={'#fd4f55'}/>
      </IconContainer>
      <Card>
        <Image source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png' }} style={{ width: 150, height: 150 }}/>
        <Id>Nº80</Id>
        <Name>Pikachu</Name>
        <Types>
          <Type type='fire'>Fire</Type>
          <Type type='fire'>Fire</Type>
        </Types>
      </Card>
    </Container>
    </>
  )
}
