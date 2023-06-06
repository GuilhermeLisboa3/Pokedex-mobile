import { Home } from '@/application/pages/home'
import { ApiPokemonParams } from '@/tests/mocks'

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react-native'

describe('Home', () => {
  const listPokemons = jest.fn()

  beforeAll(() => {
    listPokemons.mockResolvedValue({ pokemons: [ApiPokemonParams], count: 10 })
  })

  const makeSut = (): void => {
    render(<Home listPokemons={listPokemons}/>)
  }

  it('should load with correct initial state', async () => {
    makeSut()

    expect(screen.getAllByTestId('emptyCardPokemon').length).toBe(3)
    expect(screen.queryByTestId('arrowup')).toBeFalsy()
    await waitFor(() => screen.getAllByTestId('card-pokemon'))
  })

  it('should call ListPokemons', async () => {
    makeSut()

    expect(listPokemons).toHaveBeenCalledWith({ page: 0, perPage: 25 })
    expect(listPokemons).toHaveBeenCalledTimes(1)
    await waitFor(() => screen.getAllByTestId('card-pokemon'))
  })

  it('should render CardPokemon on success', async () => {
    makeSut()

    expect(await screen.findByText(ApiPokemonParams.name)).toBeTruthy()
    expect(screen.queryAllByTestId('emptyCardPokemon').length).toBeFalsy()
  })
})
