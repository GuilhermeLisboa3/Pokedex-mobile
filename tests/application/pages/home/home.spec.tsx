import { Home } from '@/application/pages/home'
import { ApiPokemonParams, populateField } from '@/tests/mocks'

import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { UnexpectedError } from '@/domain/errors'

jest.useFakeTimers()

describe('Home', () => {
  const listPokemons = jest.fn()
  const getDataPokemon = jest.fn()

  const makeSut = (): void => {
    render(
      <Home listPokemons={listPokemons} getDataPokemon={getDataPokemon}/>
    )
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

  it('should call ListPokemons if click on link', async () => {
    makeSut()
    fireEvent.press(screen.getAllByRole('link')[1])

    expect(listPokemons).toHaveBeenCalledWith({ page: 25, perPage: 25 })
    expect(listPokemons).toHaveBeenCalledTimes(2)
    await waitFor(() => screen.getByText('Guilherme Gonçalves Lisboa'))
  })

  it('should show LinkToTop if scroll view', async () => {
    makeSut()
    fireEvent.scroll(screen.getByTestId('scroll-home'), {
      nativeEvent: {
        contentSize: { height: 600, width: 400 },
        contentOffset: { y: 150, x: 0 },
        layoutMeasurement: { height: 100, width: 100 }
      }
    })

    expect(screen.queryByTestId('arrowup')).toBeTruthy()
    fireEvent.press(screen.getByTestId('arrowup'))
    await waitFor(() => screen.getByText('Guilherme Gonçalves Lisboa'))
  })

  it('should call getDataPokemon', async () => {
    makeSut()
    populateField('search-field', ApiPokemonParams.name.toLocaleUpperCase())
    act(() => { jest.advanceTimersByTime(1000) })
    expect(getDataPokemon).toHaveBeenCalledWith({ idOrName: ApiPokemonParams.name.toLocaleLowerCase() })
    expect(getDataPokemon).toHaveBeenCalledTimes(1)
    await waitFor(() => screen.getByText('Guilherme Gonçalves Lisboa'))
  })
})
