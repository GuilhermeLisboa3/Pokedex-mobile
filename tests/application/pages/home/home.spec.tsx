import { Home } from '@/application/pages/home'
import { ApiPokemonParams, populateField } from '@/tests/mocks'

import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { UnexpectedError } from '@/domain/errors'
import { AccountContext } from '@/application/contexts'

jest.useFakeTimers()

describe('Home', () => {
  const listPokemons = jest.fn()
  const getDataPokemon = jest.fn()
  const getSpy = jest.fn().mockResolvedValue(null)
  const getListFavoritePokemon = jest.fn()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: getSpy }}>
        <Home listPokemons={listPokemons} getDataPokemon={getDataPokemon} getListFavoritePokemon={getListFavoritePokemon}/>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    listPokemons.mockResolvedValue({ pokemons: [ApiPokemonParams], count: 10 })
    getDataPokemon.mockResolvedValue({ pokemon: ApiPokemonParams, description: 'any_description' })
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
    await waitFor(() => screen.getByTestId('card-pokemon'))
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
    await waitFor(() => screen.getByTestId('card-pokemon'))
  })

  it('should call ListPokemons if click on link', async () => {
    makeSut()
    fireEvent.press(screen.getAllByRole('link')[1])

    expect(listPokemons).toHaveBeenCalledWith({ page: 25, perPage: 25 })
    expect(listPokemons).toHaveBeenCalledTimes(2)
    await waitFor(() => screen.getByTestId('card-pokemon'))
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
    await waitFor(() => screen.getByTestId('card-pokemon'))
  })

  it('should call ListPokemon if search is empty', async () => {
    makeSut()
    populateField('search-field', 'any_name')
    populateField('search-field', '')
    act(() => { jest.advanceTimersByTime(1000) })
    expect(listPokemons).toHaveBeenCalledWith({ page: 0, perPage: 25 })
    expect(listPokemons).toHaveBeenCalledTimes(2)
    await waitFor(() => screen.getByTestId('card-pokemon'))
  })

  it('should render EmptyListPokemon if search return error', async () => {
    getDataPokemon.mockRejectedValueOnce(new Error())
    makeSut()
    populateField('search-field', 'any_value')
    act(() => { jest.advanceTimersByTime(1000) })
    expect(screen.getAllByTestId('emptyCardPokemon')).toBeTruthy()
    await waitFor(() => screen.getAllByTestId('emptyCardPokemon'))
  })

  it('should not call GetListFavoritePokemon if it has no token', async () => {
    makeSut()

    expect(getListFavoritePokemon).not.toHaveBeenCalledWith()
    await waitFor(() => screen.getByTestId('card-pokemon'))
  })
})
