import { Container, Main, ListPokemon } from './styles'
import { PokemonCardAnimation, Footer } from '@/application/components'
import { type DeletePokemon, type GetListFavoritePokemon } from '@/domain/use-cases/pokemon'
import { type GetDataPokemon } from '@/domain/use-cases/api-pokemon'
import { type ApiPokemon, type Pokemon } from '@/domain/models'

import React, { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { PokemonProvider } from '@/application/contexts'

type Props = {
  getListFavoritePokemon: GetListFavoritePokemon
  getDataPokemon: GetDataPokemon
  deletePokemon: DeletePokemon
}

export const Favorite: React.FC<Props> = ({ getListFavoritePokemon, getDataPokemon, deletePokemon }) => {
  const [listFavoritePokemon, setListFavoritePokemon] = useState<Pokemon[]>([])
  const [listPokemon, setListPokemon] = useState<ApiPokemon[]>([])

  const [reload, setReload] = useState(false)
  const [, setError] = useState<string | undefined>(undefined)

  const changeReload = (): void => {
    setError(undefined)
    setReload(!reload)
  }

  useFocusEffect(useCallback(() => {
    getListFavoritePokemon().then(result => {
      listPokemonHandler(result)
    })
  }, [reload]))

  const listPokemonHandler = async (favoritePokemon: Pokemon[]): Promise<void> => {
    const listPokemon = favoritePokemon.map(async (pokemon) => {
      const dataPokemon = await getDataPokemon({ idOrName: pokemon.idPokemon })
      return dataPokemon.pokemon
    })
    const pokemons = await Promise.all(listPokemon)
    setListPokemon(pokemons)
    setListFavoritePokemon(favoritePokemon)
  }

  const handlerDeletePokemon = async (pokemon: ApiPokemon): Promise<void> => {
    try {
      await deletePokemon({ idPokemon: pokemon.id.toString() })
      const favoritePokemon = listFavoritePokemon.filter(pokemonFavorite => pokemonFavorite.idPokemon !== pokemon.id.toString())
      setListFavoritePokemon(favoritePokemon)
      changeReload()
    } catch (error) {}
  }

  return (
    <PokemonProvider deletePokemon={handlerDeletePokemon} listFavoritePokemon={listFavoritePokemon}>
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
    </PokemonProvider>
  )
}
