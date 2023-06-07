import { CardPokemon } from '@/application/components'
import { ApiPokemonParams } from '@/tests/mocks'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('CardPokemon', () => {
  it('should render one type', () => {
    render(<CardPokemon pokemon={ApiPokemonParams}/>)

    expect(screen.getByText(ApiPokemonParams.types[0].type.name)).toBeTruthy()
  })
})
