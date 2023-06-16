import { type ApiPokemon, type Pokemon } from '@/domain/models'
import { type ReactNode, createContext } from 'react'

type Props = {
  pokemonFavorite: (idPokemon: string) => boolean
  addPokemon?: (pokemon: ApiPokemon) => Promise<void>
}

export const PokemonContext = createContext<Props>(null as any)

type ProviderProps = {
  children: ReactNode
  listFavoritePokemon: Pokemon[]
  addPokemon?: (pokemon: ApiPokemon) => Promise<void>
}

export function PokemonProvider ({ children, listFavoritePokemon, addPokemon }: ProviderProps): any {
  const pokemonFavorite = (idPokemon: string): boolean => {
    const pokemon = listFavoritePokemon.find(poke => poke.idPokemon === idPokemon.toString())
    return pokemon !== undefined
  }
  return <PokemonContext.Provider value={{ pokemonFavorite, addPokemon }}>{children}</PokemonContext.Provider>
}
