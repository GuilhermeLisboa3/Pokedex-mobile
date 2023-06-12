import { DataPokemon } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'
import { CardAnimationContext } from '@/application/contexts'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('DataPokemon', () => {
  it('should render one type and ability', () => {
    render(
      <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
        <DataPokemon pokemon={ApiPokemonParams} description='any'/>
      </CardAnimationContext.Provider>
    )

    expect(screen.getByText(ApiPokemonParams.types[0].type.name)).toBeTruthy()
    expect(screen.getByText(ApiPokemonParams.abilities[0].ability.name)).toBeTruthy()
  })

  it('should render two type and ability', () => {
    render(
      <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
        <DataPokemon pokemon={
          {
            ...ApiPokemonParams,
            types: [{ type: { name: 'fire' } }, { type: { name: 'water' } }],
            abilities: [{ ability: { name: 'static' } }, { ability: { name: 'bold' } }]
          } } description='any'/>
      </CardAnimationContext.Provider>
    )

    expect(screen.getByText('fire')).toBeTruthy()
    expect(screen.getByText('water')).toBeTruthy()
    expect(screen.getByText('static')).toBeTruthy()
    expect(screen.getByText('bold')).toBeTruthy()
  })
  it('should have first type style if not two types', () => {
    render(
      <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
        <DataPokemon pokemon={
          {
            ...ApiPokemonParams,
            types: [{ type: { name: 'fire' } }],
            abilities: [{ ability: { name: 'static' } }, { ability: { name: 'bold' } }]
          } } description='any'/>
      </CardAnimationContext.Provider>
    )

    expect(screen.getByTestId('text-ability')).toHaveStyle({ color: '#793d13' })
    expect(screen.getByTestId('ability')).toHaveStyle(null)
  })

  it('should call methods if click on card', () => {
    const cardPokemonOpen = jest.fn()
    const changeCardSize = jest.fn()
    const dataPokemonOpen = jest.fn()
    render(
    <CardAnimationContext.Provider value={{ cardPokemonOpen, changeCardSize, dataPokemonOpen }}>
      <DataPokemon pokemon={ApiPokemonParams} description='any'/>
    </CardAnimationContext.Provider>
    )

    fireEvent.press(screen.getByTestId('close-data-pokemon'))
    expect(cardPokemonOpen).toHaveBeenCalledWith(true)
    expect(dataPokemonOpen).toHaveBeenCalledWith(false)
    expect(changeCardSize).toHaveBeenCalledWith(280, 180)
  })
})
