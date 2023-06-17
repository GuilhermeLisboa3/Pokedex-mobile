import { CardPokemon } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'
import { CardAnimationContext, PokemonProvider } from '@/application/contexts'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('CardPokemon', () => {
  it('should render one type', () => {
    render(
      <PokemonProvider listFavoritePokemon={[]}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
          <CardPokemon pokemon={ApiPokemonParams}/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    expect(screen.getByText(ApiPokemonParams.types[0].type.name)).toBeTruthy()
    expect(screen.getByTestId('icon-heart')).toBeTruthy()
  })

  it('should render two type', () => {
    render(
    <PokemonProvider listFavoritePokemon={[{ idPokemon: '1' }]}>
      <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
        <CardPokemon pokemon={{ ...ApiPokemonParams, id: '1', types: [{ type: { name: 'fire' } }, { type: { name: 'water' } }] }}/>
      </CardAnimationContext.Provider>
    </PokemonProvider>
    )

    expect(screen.getByText('fire')).toBeTruthy()
    expect(screen.getByText('water')).toBeTruthy()
    expect(screen.getByTestId('bg-icon-heart')).toBeTruthy()
  })

  it('should call methods if click on card', () => {
    const cardPokemonOpen = jest.fn()
    const changeCardSize = jest.fn()
    const dataPokemonOpen = jest.fn()
    const addPokemon = jest.fn()
    render(
    <PokemonProvider listFavoritePokemon={[]}>
      <CardAnimationContext.Provider value={{ cardPokemonOpen, changeCardSize, dataPokemonOpen }}>
        <CardPokemon pokemon={{ ...ApiPokemonParams, types: [{ type: { name: 'fire' } }, { type: { name: 'water' } }] }}/>
      </CardAnimationContext.Provider>
    </PokemonProvider>
    )

    fireEvent.press(screen.getByTestId('card-pokemon'))
    expect(cardPokemonOpen).toHaveBeenCalledWith(false)
    expect(dataPokemonOpen).toHaveBeenCalledWith(true)
    expect(changeCardSize).toHaveBeenCalledWith(380, 800)
    fireEvent.press(screen.getByTestId('icon-heart'))
    expect(addPokemon).not.toHaveBeenCalledWith(ApiPokemonParams)
  })
})
