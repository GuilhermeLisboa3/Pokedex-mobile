import { Favorite } from '@/application/pages/favorite'
import { ApiPokemonParams } from '@/tests/mocks'

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react-native'
import { AccountContext, PokemonProvider } from '@/application/contexts'
import { NavigationContext } from '@react-navigation/native'

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

  const makeSut = (): void => {
    render(
      <NavigationContext.Provider value={navContext}>
        <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
          <PokemonProvider listFavoritePokemon={[{ idPokemon: '1' }]} addPokemon={jest.fn()} deletePokemon={jest.fn()}>
            <Favorite getListFavoritePokemon={getListFavoritePokemon} getDataPokemon={getDataPokemon}/>
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
})
