import { Favorite } from '@/application/pages/favorite'
import { ApiPokemonParams } from '@/tests/mocks'

import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { AccountContext, PokemonProvider } from '@/application/contexts'
import { NavigationContext } from '@react-navigation/native'
import { AccessDeniedError } from '@/domain/errors'

const actualNav = jest.requireActual('@react-navigation/native')
const navContext = {
  ...actualNav.navigation,
  navigate: () => {},
  dangerouslyGetState: () => {},
  setOptions: () => {},
  addListener: () => () => {},
  isFocused: () => true
}

describe('Favorite', () => {
  const getListFavoritePokemon = jest.fn()
  const getDataPokemon = jest.fn()
  const deletePokemon = jest.fn()

  const makeSut = (): void => {
    render(
      <NavigationContext.Provider value={navContext}>
        <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
          <PokemonProvider listFavoritePokemon={[{ idPokemon: '1' }]} addPokemon={jest.fn()} deletePokemon={jest.fn()}>
            <Favorite getListFavoritePokemon={getListFavoritePokemon} getDataPokemon={getDataPokemon} deletePokemon={deletePokemon}/>
          </PokemonProvider>
        </AccountContext.Provider>
      </NavigationContext.Provider>
    )
  }

  beforeAll(() => {
    getListFavoritePokemon.mockResolvedValue([{ idPokemon: '1' }])
    getDataPokemon.mockResolvedValue({ pokemon: { ...ApiPokemonParams, id: '1' }, description: 'any_description' })
  })

  it('should call GetListFavoritePokemon', async () => {
    makeSut()

    expect(getListFavoritePokemon).toHaveBeenCalled()
    expect(getListFavoritePokemon).toHaveBeenCalledTimes(1)
    await waitFor(() => screen.getByTestId('scroll-home'))
  })

  it('should call GetDataPokemon with correct value', async () => {
    makeSut()
    await waitFor(() => screen.getAllByTestId('card-pokemon'))
    expect(getDataPokemon).toHaveBeenCalledWith({ idOrName: '1' })
    expect(getDataPokemon).toHaveBeenCalledTimes(1)
  })

  it('should render CardPokemon on success', async () => {
    makeSut()
    await waitFor(() => screen.getByTestId('card-pokemon'))

    expect(screen.getAllByTestId('card-pokemon')).toHaveLength(1)
  })

  it('should call DeletePokemon if click icon heart red', async () => {
    makeSut()
    await waitFor(() => screen.getByTestId('card-pokemon'))
    fireEvent.press(screen.getByTestId('bg-icon-heart'))

    expect(deletePokemon).toHaveBeenCalledWith({ idPokemon: '1' })
    expect(deletePokemon).toHaveBeenCalledTimes(1)
    await waitFor(() => screen.getAllByTestId('card-pokemon'))
  })

  it('should show text if GetListFavoritePokemon return array empty', async () => {
    getListFavoritePokemon.mockResolvedValueOnce([])
    makeSut()

    expect(await screen.findByText('Você não tem pokemons favoritado.')).toBeTruthy()
  })

  it('should show empty content if GetListFavoritePokemon returns AccessDeniedError', async () => {
    getListFavoritePokemon.mockRejectedValueOnce(new AccessDeniedError())
    makeSut()
    await waitFor(() => screen.getByText('Tentar novamente'))
    expect(screen.getByText('Tentar novamente')).toBeTruthy()
  })
})
