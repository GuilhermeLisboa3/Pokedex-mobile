import { PokemonCardAnimation } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'
import { CardAnimationContext } from '@/application/contexts'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('PokemonCardAnimation', () => {
  it('should load with correct initial state', () => {
    const cardPokemonOpen = jest.fn().mockResolvedValueOnce(true)
    render(
      <CardAnimationContext.Provider value={{ cardPokemonOpen, changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
        <PokemonCardAnimation pokemon={ApiPokemonParams}/>
      </CardAnimationContext.Provider>
    )

    expect(screen.getByText(ApiPokemonParams.types[0].type.name)).toBeTruthy()
  })
})
