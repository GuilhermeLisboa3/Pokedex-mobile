import { AnimatedView } from './styles'
import { type ApiPokemon } from '@/domain/models'
import { CardPokemon } from '../pokemon/card-pokemon'
import { DataPokemon } from '../pokemon/data-pokemon'
import { CardAnimationContext } from '@/application/contexts'

import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useState } from 'react'

type Props = { pokemon: ApiPokemon }

export const PokemonCardAnimation: React.FC<Props> = ({ pokemon }) => {
  const [dataPokemonOpen, setDataPokemonOpen] = useState(false)
  const [cardPokemonOpen, setCardPokemonOpen] = useState(true)
  const widthCard = useSharedValue(280)
  const heightCard = useSharedValue(180)

  const animatedStyle = useAnimatedStyle(() => ({
    width: widthCard.value,
    height: heightCard.value
  }))

  const changeCardSize = (width: number, height: number): void => {
    widthCard.value = withTiming(width)
    heightCard.value = withTiming(height)
  }

  return (
    <CardAnimationContext.Provider value={{ changeCardSize, cardPokemonOpen: setCardPokemonOpen, dataPokemonOpen: setDataPokemonOpen }}>
      <AnimatedView style={animatedStyle} testID='card-animation'>
        {
          dataPokemonOpen
            ? <DataPokemon pokemon={pokemon}/>
            : ''
        }
        {
          cardPokemonOpen
            ? <CardPokemon pokemon={pokemon}/>
            : ''
        }
      </AnimatedView>
    </CardAnimationContext.Provider>
  )
}
