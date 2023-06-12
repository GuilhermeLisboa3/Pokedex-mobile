import { StarsPokemon } from '@/application/components/pokemon/data-pokemon/components'
import { CardAnimationContext } from '@/application/contexts'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('StarsPokemon', () => {
  const stars = [
    { base_stat: 35 },
    { base_stat: 45 },
    { base_stat: 55 },
    { base_stat: 65 },
    { base_stat: 75 },
    { base_stat: 85 }
  ]
  it('should load with correct initial state', () => {
    render(
      <CardAnimationContext.Provider value={{ cardPokemonOpen: jest.fn(), changeCardSize: jest.fn(), dataPokemonOpen: jest.fn() }}>
        <StarsPokemon stars={ stars }/>
      </CardAnimationContext.Provider>
    )

    expect(screen.getByText('35')).toBeTruthy()
    expect(screen.getByText('45')).toBeTruthy()
    expect(screen.getByText('55')).toBeTruthy()
    expect(screen.getByText('65')).toBeTruthy()
    expect(screen.getByText('75')).toBeTruthy()
    expect(screen.getByText('85')).toBeTruthy()
  })
})
