import { PokemonCardAnimation } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'
import { CardAnimationContext, PokemonProvider } from '@/application/contexts'

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react-native'

jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View

  return {
    useSharedValue: jest.fn(),
    withTiming: jest.fn(),
    useAnimatedStyle: jest.fn(),
    View
  }
})

describe('PokemonCardAnimation', () => {
  const useSharedValue = jest.spyOn(require('react-native-reanimated'), 'useSharedValue')
  const value = { value: 0 }

  beforeAll(() => {
    useSharedValue.mockReturnValue(value)
  })

  it('should load with correct initial state', () => {
    const cardPokemonOpen = jest.fn().mockResolvedValueOnce(true)
    render(
      <PokemonProvider listFavoritePokemon={[]}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen, changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
          <PokemonCardAnimation pokemon={ApiPokemonParams}/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    expect(screen.getByTestId('card-pokemon')).toBeTruthy()
  })

  it('should render dataPokemon if click CardPokemon', async () => {
    const cardPokemonOpen = jest.fn().mockResolvedValueOnce(true)
    render(
      <PokemonProvider listFavoritePokemon={[]}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen, changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
          <PokemonCardAnimation pokemon={ApiPokemonParams}/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    fireEvent.press(screen.getByTestId('card-pokemon'))

    expect(await screen.findByTestId('close-data-pokemon')).toBeTruthy()
  })
})
