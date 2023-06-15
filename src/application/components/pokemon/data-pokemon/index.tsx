import { Id, Name, TextType, Type, Types, Title } from '../styles'
import { Icon, Icons, Image, Skills, Ability, TextAbility, Body, BodyData, BodyDataValue } from './styles'
import { CardAnimationContext, PokemonContext } from '@/application/contexts'
import { StarsPokemon } from './components'
import { type ApiPokemon } from '@/domain/models'

import { Feather, AntDesign } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import { useContext } from 'react'

type Props = { pokemon: ApiPokemon }

export const DataPokemon: React.FC<Props> = ({ pokemon }) => {
  const { cardPokemonOpen, changeCardSize, dataPokemonOpen } = useContext(CardAnimationContext)
  const { pokemonFavorite } = useContext(PokemonContext)
  const typePokemon = (position: number): string => pokemon.types[position].type.name
  const abilityPokemon = (position: number): string => pokemon.abilities[position].ability.name
  const isFavorite = pokemonFavorite(pokemon.id)
  return (
    <ScrollView>
      <Icons>
        <Icon onPress={() => {
          dataPokemonOpen(false)
          cardPokemonOpen(true)
          changeCardSize(280, 180)
        }} testID='close-data-pokemon'><AntDesign name='close' size={30} color={'#fd4f55'}/></Icon>
        <Icon>
          {
            isFavorite
              ? <AntDesign name="heart" size={20} color="#fd4f55" testID='bg-icon-heart'/>
              : <Feather name='heart' size={20} color={'#fd4f55'} testID='icon-heart'/>
          }
        </Icon>
      </Icons>
      <Image source={{ uri: pokemon.sprites.front_default }} style={{ width: 200, height: 200 }}/>
      <Id size={25} marginTop={0}>Nº{pokemon.id}</Id>
      <Name size={25} marginTop={0}>{pokemon.name}</Name>
      <Types>
        <Type type={typePokemon(0)}><TextType type={typePokemon(0)}>{typePokemon(0)}</TextType></Type>
        {pokemon.types.length > 1 ? <Type type={typePokemon(1)}><TextType type={typePokemon(1)}>{typePokemon(1)}</TextType></Type> : ''}
      </Types>
      <Title size={20} marginTop={15}>Habilidades</Title>
      <Skills>
        <Ability ability={typePokemon(0)}><TextAbility ability={typePokemon(0)}>{abilityPokemon(0)}</TextAbility></Ability>
        { pokemon.abilities.length > 1
          ? <Ability ability={pokemon.types.length > 1 ? typePokemon(1) : typePokemon(0) } testID='ability'>
              <TextAbility ability={pokemon.types.length > 1 ? typePokemon(1) : typePokemon(0) } testID='text-ability'>{abilityPokemon(1)}</TextAbility>
            </Ability>
          : ''
        }
      </Skills>
      <Body>
        <BodyData>
          <Title size={20} marginTop={0}>Altura</Title>
          <BodyDataValue>{pokemon.height}</BodyDataValue>
        </BodyData>
        <BodyData>
          <Title size={20} marginTop={0}>Peso</Title>
          <BodyDataValue>{pokemon.weight}kg</BodyDataValue>
        </BodyData>
      </Body>
      <BodyData>
        <Title size={20} marginTop={0}>Base Exp</Title>
        <BodyDataValue>{pokemon.base_experience}</BodyDataValue>
      </BodyData>
      <Title size={20} marginTop={10}>Estatísticas</Title>
      <StarsPokemon stars={pokemon.stats}/>
    </ScrollView>
  )
}
