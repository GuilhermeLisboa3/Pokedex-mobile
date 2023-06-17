import { DataPokemon } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'
import { CardAnimationContext, PokemonProvider } from '@/application/contexts'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('DataPokemon', () => {
  it('should render one type and ability', () => {
    render(
      <PokemonProvider listFavoritePokemon={[]} deletePokemon={jest.fn()}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
          <DataPokemon pokemon={ApiPokemonParams}/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    expect(screen.getByTestId('icon-heart')).toBeTruthy()
    expect(screen.getByText(ApiPokemonParams.types[0].type.name)).toBeTruthy()
    expect(screen.getByText(ApiPokemonParams.abilities[0].ability.name)).toBeTruthy()
  })

  it('should render two type and ability', () => {
    render(
      <PokemonProvider listFavoritePokemon={[{ idPokemon: '1' }]} deletePokemon={jest.fn()}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
          <DataPokemon pokemon={
            {
              ...ApiPokemonParams,
              id: '1',
              types: [{ type: { name: 'fire' } }, { type: { name: 'water' } }],
              abilities: [{ ability: { name: 'static' } }, { ability: { name: 'bold' } }]
            } }/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    expect(screen.getByTestId('bg-icon-heart')).toBeTruthy()
    expect(screen.getByText('fire')).toBeTruthy()
    expect(screen.getByText('water')).toBeTruthy()
    expect(screen.getByText('static')).toBeTruthy()
    expect(screen.getByText('bold')).toBeTruthy()
  })
  it('should have first type style if not two types', () => {
    render(
      <PokemonProvider listFavoritePokemon={[]} deletePokemon={jest.fn()}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
          <DataPokemon pokemon={
            {
              ...ApiPokemonParams,
              types: [{ type: { name: 'fire' } }],
              abilities: [{ ability: { name: 'static' } }, { ability: { name: 'bold' } }]
            } }/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    expect(screen.getByTestId('text-ability')).toHaveStyle({ color: '#793d13' })
    expect(screen.getByTestId('ability')).toHaveStyle(null)
  })

  it('should call methods if click on card', () => {
    const cardPokemonOpen = jest.fn()
    const changeCardSize = jest.fn()
    const dataPokemonOpen = jest.fn()
    const addPokemon = jest.fn()
    render(
      <PokemonProvider listFavoritePokemon={[]} deletePokemon={jest.fn()}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen, changeCardSize, dataPokemonOpen }}>
          <DataPokemon pokemon={ApiPokemonParams}/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    fireEvent.press(screen.getByTestId('close-data-pokemon'))
    expect(cardPokemonOpen).toHaveBeenCalledWith(true)
    expect(dataPokemonOpen).toHaveBeenCalledWith(false)
    expect(changeCardSize).toHaveBeenCalledWith(280, 180)
    fireEvent.press(screen.getByTestId('icon-heart'))
    expect(addPokemon).not.toHaveBeenCalledWith(ApiPokemonParams)
  })

  it('should call addPokemon if click heart', () => {
    const addPokemon = jest.fn()
    render(
      <PokemonProvider listFavoritePokemon={[]} addPokemon={addPokemon} deletePokemon={jest.fn()}>
        <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
          <DataPokemon pokemon={ApiPokemonParams}/>
        </CardAnimationContext.Provider>
      </PokemonProvider>
    )

    fireEvent.press(screen.getByTestId('icon-heart'))
    expect(addPokemon).toHaveBeenCalledWith(ApiPokemonParams)
  })
})
