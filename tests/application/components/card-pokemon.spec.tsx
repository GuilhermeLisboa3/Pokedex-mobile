import { CardPokemon } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('CardPokemon', () => {
  it('should render one type', () => {
    render(<CardPokemon pokemon={ApiPokemonParams}/>)

    expect(screen.getByText(ApiPokemonParams.types[0].type.name)).toBeTruthy()
  })

  it('should render two type', () => {
    render(<CardPokemon pokemon={{ ...ApiPokemonParams, types: [{ type: { name: 'fire' } }, { type: { name: 'water' } }] }}/>)

    expect(screen.getByText('fire')).toBeTruthy()
    expect(screen.getByText('water')).toBeTruthy()
  })
})
