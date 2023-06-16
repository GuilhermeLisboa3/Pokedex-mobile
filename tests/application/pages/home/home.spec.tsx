import { Home } from '@/application/pages/home'
import { ApiPokemonParams, populateField, AccountParams } from '@/tests/mocks'

import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { UnexpectedError } from '@/domain/errors'
import { AccountContext, PokemonProvider } from '@/application/contexts'
import { NavigationContext } from '@react-navigation/native'

jest.useFakeTimers()

const actualNav = jest.requireActual('@react-navigation/native')
const navContext = {
  ...actualNav.navigation,
  navigate: () => {},
  dangerouslyGetState: () => {},
  setOptions: () => {},
  addListener: () => () => {},
  isFocused: () => true
}

describe('Home', () => {
  const listPokemons = jest.fn()
  const getDataPokemon = jest.fn()
  const getSpy = jest.fn()
  const getListFavoritePokemon = jest.fn()
  const addPokemon = jest.fn()

  const makeSut = (): void => {
    render(
      <NavigationContext.Provider value={navContext}>
        <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: getSpy }}>
          <PokemonProvider listFavoritePokemon={[]} addPokemon={jest.fn()}>
            <Home listPokemons={listPokemons} getDataPokemon={getDataPokemon} getListFavoritePokemon={getListFavoritePokemon} addPokemon={addPokemon}/>
          </PokemonProvider>
        </AccountContext.Provider>
      </NavigationContext.Provider>
    )
  }

  beforeAll(() => {
    getSpy.mockResolvedValue(undefined)
    listPokemons.mockResolvedValue({ pokemons: [ApiPokemonParams], count: 10 })
    getDataPokemon.mockResolvedValue({ pokemon: ApiPokemonParams, description: 'any_description' })
    getListFavoritePokemon.mockResolvedValue([{ idPokemon: '1' }])
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

  describe('test with token', () => {
    const { name, email, token } = AccountParams
    beforeAll(() => { getSpy.mockResolvedValue({ name, email, token }) })
    it('should call GetListFavoritePokemon if has token', async () => {
      makeSut()
      await waitFor(() => screen.getAllByTestId('card-pokemon'))
      expect(getListFavoritePokemon).toHaveBeenCalledWith()
      expect(getListFavoritePokemon).toHaveBeenCalledTimes(1)
    })

    it('should return array empty if GetListFavoritePokemon returns AccessDeniedError', async () => {
      getListFavoritePokemon.mockRejectedValueOnce(new Error())
      makeSut()

      await waitFor(() => screen.getAllByTestId('card-pokemon'))
      expect(screen.getByTestId('icon-heart')).toBeTruthy()
    })

    it('should call AddPokemon if click icon heart', async () => {
      makeSut()
      await waitFor(() => screen.getAllByTestId('card-pokemon'))
      fireEvent.press(screen.getByTestId('icon-heart'))

      expect(addPokemon).toHaveBeenCalledWith({ idPokemon: ApiPokemonParams.id })
      expect(addPokemon).toHaveBeenCalledTimes(1)
      await waitFor(() => screen.getAllByTestId('card-pokemon'))
    })
  })
})
