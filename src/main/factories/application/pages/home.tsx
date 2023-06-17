import { makeListPokemons, makeGetDataPokemon } from '@/main/factories/domain/use-cases/api-pokemon'
import { makeGetListFavoritePokemon, makeAddPokemon, makeDeletePokemon } from '@/main/factories/domain/use-cases/pokemon'
import { Home } from '@/application/pages/home'

import React from 'react'

export const MakeHome: React.FC = () =>
  (<Home
    listPokemons={makeListPokemons()}
    getDataPokemon={makeGetDataPokemon()}
    getListFavoritePokemon={makeGetListFavoritePokemon()}
    addPokemon={makeAddPokemon()}
    deletePokemon={makeDeletePokemon()}
  />)
