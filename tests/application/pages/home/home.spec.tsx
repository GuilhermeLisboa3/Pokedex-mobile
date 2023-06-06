import { Home } from '@/application/pages/home'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('Home', () => {
  const listPokemons = jest.fn()
  const makeSut = (): void => {
    render(<Home listPokemons={listPokemons}/>)
  }

  it('should load with correct initial state', () => {
    makeSut()

    expect(screen.getAllByTestId('emptyCardPokemon').length).toBe(3)
    expect(screen.queryByTestId('arrowup')).toBeFalsy()
  })

  it('should call ListPokemons', async () => {
    makeSut()

    expect(listPokemons).toHaveBeenCalledWith({ page: 0, perPage: 25 })
    expect(listPokemons).toHaveBeenCalledTimes(1)
  })
})
