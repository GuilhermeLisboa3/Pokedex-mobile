import { Container, Main, ListPokemon } from './styles'
import { PokemonCardAnimation, Footer } from '@/application/components'
import { type GetListFavoritePokemon } from '@/domain/use-cases/pokemon'
import { type GetDataPokemon } from '@/domain/use-cases/api-pokemon'
import { type ApiPokemon, type Pokemon } from '@/domain/models'

import React, { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

type Props = {
  getListFavoritePokemon: GetListFavoritePokemon
  getDataPokemon: GetDataPokemon
}

export const Favorite: React.FC<Props> = ({ getListFavoritePokemon, getDataPokemon }) => {
  const [, setListFavoritePokemon] = useState<Pokemon[]>([])
  const [listPokemon, setListPokemon] = useState<ApiPokemon[]>([])

  useFocusEffect(useCallback(() => {
    getListFavoritePokemon().then(result => {
      listPokemonHandler(result)
    })
  }, []))

  const listPokemonHandler = async (favoritePokemon: Pokemon[]): Promise<void> => {
    const listPokemon = favoritePokemon.map(async (pokemon) => {
      const dataPokemon = await getDataPokemon({ idOrName: pokemon.idPokemon })
      return dataPokemon.pokemon
    })
    const pokemons = await Promise.all(listPokemon)
    setListPokemon(pokemons)
    setListFavoritePokemon(favoritePokemon)
  }

  return (
    <>
    <ScrollView
    testID='scroll-home'
    contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Main>
          <ListPokemon>
          { listPokemon.length > 0
            ? listPokemon.map(pokemon => (<PokemonCardAnimation pokemon={pokemon} key={pokemon.id}/>))
            : <p className='favorite-text'>Você não tem pokemons favoritado.</p>
          }
          </ListPokemon>
        </Main>
        <Footer/>
      </Container>
    </ScrollView>
    </>
  )
}
