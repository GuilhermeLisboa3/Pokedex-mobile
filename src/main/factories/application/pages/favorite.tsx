import { makeGetDataPokemon } from '@/main/factories/domain/use-cases/api-pokemon'
import { makeGetListFavoritePokemon, makeDeletePokemon } from '@/main/factories/domain/use-cases/pokemon'
import { Favorite } from '@/application/pages/favorite'

import React from 'react'

export const MakeFavorite: React.FC = () =>
  (<Favorite
    getDataPokemon={makeGetDataPokemon()}
    getListFavoritePokemon={makeGetListFavoritePokemon()}
    deletePokemon={makeDeletePokemon()}
  />)
