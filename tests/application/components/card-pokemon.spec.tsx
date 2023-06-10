import { CardPokemon } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'
import { CardAnimationContext } from '@/application/contexts'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('CardPokemon', () => {
  it('should render one type', () => {
    render(
      <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
        <CardPokemon pokemon={ApiPokemonParams}/>
      </CardAnimationContext.Provider>
    )

    expect(screen.getByText(ApiPokemonParams.types[0].type.name)).toBeTruthy()
  })

  it('should render two type', () => {
    render(
    <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
      <CardPokemon pokemon={{ ...ApiPokemonParams, types: [{ type: { name: 'fire' } }, { type: { name: 'water' } }] }}/>
    </CardAnimationContext.Provider>
    )

    expect(screen.getByText('fire')).toBeTruthy()
    expect(screen.getByText('water')).toBeTruthy()
  })
})
