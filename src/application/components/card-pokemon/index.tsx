import { Container, IconContainer, Card, Image, Id, Name, Types, Type, Text } from './styles'
import { type ApiPokemon } from '@/domain/models'

import { Feather } from '@expo/vector-icons'

type Props = { pokemon: ApiPokemon }

export const CardPokemon: React.FC<Props> = ({ pokemon }) => {
  const typePokemon = (position: number): string => pokemon.types[position].type.name
  return (
    <>
    <Container testID='card-pokemon'>
      <IconContainer>
        <Feather name='heart' size={20} color={'#fd4f55'}/>
      </IconContainer>
      <Card>
        <Image source={{ uri: pokemon.sprites.front_default }} style={{ width: 150, height: 150 }}/>
        <Id>{ pokemon.id }</Id>
        <Name>{ pokemon.name.substr(0, 16) }</Name>
        <Types>
          <Type type={typePokemon(0)}><Text type={typePokemon(0)}>{typePokemon(0)}</Text></Type>
          {pokemon.types.length > 1 ? <Type type={typePokemon(1)}><Text type={typePokemon(1)}>{typePokemon(1)}</Text></Type> : ''}
        </Types>
      </Card>
    </Container>
    </>
  )
}
