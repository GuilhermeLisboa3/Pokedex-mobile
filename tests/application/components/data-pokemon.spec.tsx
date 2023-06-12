import { DataPokemon } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'
import { CardAnimationContext } from '@/application/contexts'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

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
})
