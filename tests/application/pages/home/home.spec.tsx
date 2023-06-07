import { Home } from '@/application/pages/home'
import { ApiPokemonParams } from '@/tests/mocks'

import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { UnexpectedError } from '@/domain/errors'

describe('Home', () => {
  const listPokemons = jest.fn()

  const makeSut = (): void => {
    render(<Home listPokemons={listPokemons}/>)
  }

  beforeAll(() => {
    listPokemons.mockResolvedValue({ pokemons: [ApiPokemonParams], count: 10 })
  })

  it('should load with correct initial state', async () => {
    listPokemons.mockResolvedValueOnce({ pokemons: [], count: 10 })
    makeSut()

    expect(screen.getAllByTestId('emptyCardPokemon').length).toBe(3)
    expect(screen.queryByTestId('arrowup')).toBeFalsy()
    await waitFor(() => screen.getByText('Guilherme Gonçalves Lisboa'))
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

  it('should render Error if ListPokemons return error', async () => {
    listPokemons.mockRejectedValueOnce(new UnexpectedError())
    makeSut()
    expect(await screen.findByText(new UnexpectedError().message)).toBeTruthy()
  })

  it('should call ListPokemons on reload', async () => {
    listPokemons.mockRejectedValueOnce(new UnexpectedError())
    makeSut()
    fireEvent.press(await screen.findByText('Tentar novamente'))

    expect(listPokemons).toHaveBeenCalledWith({ page: 0, perPage: 25 })
    expect(listPokemons).toHaveBeenCalledTimes(2)
    await waitFor(() => screen.getByText('Guilherme Gonçalves Lisboa'))
  })
})
