import { useContext } from 'react'
import { Id, Name, TextType, Type, Types } from '../styles'
import { Container, IconContainer, Card, Image } from './styles'
import { type ApiPokemon } from '@/domain/models'
import { CardAnimationContext, PokemonContext } from '@/application/contexts'

import { Feather, AntDesign } from '@expo/vector-icons'

type Props = {
  pokemon: ApiPokemon
}

export const CardPokemon: React.FC<Props> = ({ pokemon }) => {
  const { cardPokemonOpen, changeCardSize, dataPokemonOpen } = useContext(CardAnimationContext)
  const { pokemonFavorite, addPokemon } = useContext(PokemonContext)
  const isFavorite = pokemonFavorite(pokemon.id)
  const typePokemon = (position: number): string => pokemon.types[position].type.name
  return (
    <>
    <Container
    testID='card-pokemon'
    onPress={ () => {
      cardPokemonOpen(false)
      dataPokemonOpen(true)
      changeCardSize(380, 800)
    }}>
      <IconContainer onPress={() => {
        if (addPokemon) addPokemon(pokemon)
      }}>
        {
          isFavorite
            ? <AntDesign name="heart" size={20} color="#fd4f55" testID='bg-icon-heart'/>
            : <Feather name='heart' size={20} color={'#fd4f55'} testID='icon-heart'/>
        }
      </IconContainer>
      <Card>
        <Image source={{ uri: pokemon.sprites.front_default }} style={{ width: 150, height: 150 }}/>
        <Id size={18} marginTop={45}>Nº{ pokemon.id }</Id>
        <Name size={19} marginTop={0}>{ pokemon.name.substr(0, 16) }</Name>
        <Types>
          <Type type={typePokemon(0)}><TextType type={typePokemon(0)}>{typePokemon(0)}</TextType></Type>
          {pokemon.types.length > 1 ? <Type type={typePokemon(1)}><TextType type={typePokemon(1)}>{typePokemon(1)}</TextType></Type> : ''}
        </Types>
      </Card>
    </Container>
    </>
  )
}
