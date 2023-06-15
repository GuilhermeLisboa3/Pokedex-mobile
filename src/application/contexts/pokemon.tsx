import { type Pokemon } from '@/domain/models'
import { type ReactNode, createContext } from 'react'

type Props = {
  pokemonFavorite: (idPokemon: string) => boolean
}

export const PokemonContext = createContext<Props>(null as any)

type ProviderProps = {
  children: ReactNode
  listFavoritePokemon: Pokemon[]
}

export function PokemonProvider ({ children, listFavoritePokemon }: ProviderProps): any {
  const pokemonFavorite = (idPokemon: string): boolean => {
    const pokemon = listFavoritePokemon.find(poke => poke.idPokemon === idPokemon.toString())
    return pokemon !== undefined
  }
  return <PokemonContext.Provider value={{ pokemonFavorite }}>{children}</PokemonContext.Provider>
}
