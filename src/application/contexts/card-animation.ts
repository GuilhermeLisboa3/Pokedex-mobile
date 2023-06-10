import { createContext } from 'react'

type Props = {
  changeCardSize: (width: number, height: number) => void
  dataPokemonOpen: React.Dispatch<React.SetStateAction<boolean>>
  cardPokemonOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardAnimationContext = createContext<Props>(null as any)
