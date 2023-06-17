import { Favorite } from '@/application/pages/favorite'

import React from 'react'
import { render } from '@testing-library/react-native'
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

  const makeSut = (): void => {
    render(
      <NavigationContext.Provider value={navContext}>
        <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: jest.fn() }}>
          <PokemonProvider listFavoritePokemon={[{ idPokemon: '1' }]} addPokemon={jest.fn()} deletePokemon={jest.fn()}>
            <Favorite getListFavoritePokemon={getListFavoritePokemon}/>
          </PokemonProvider>
        </AccountContext.Provider>
      </NavigationContext.Provider>
    )
  }

  beforeAll(() => {
    getListFavoritePokemon.mockResolvedValue([{ idPokemon: '1' }])
  })

  it('should call GetListFavoritePokemon', async () => {
    makeSut()

    expect(getListFavoritePokemon).toHaveBeenCalled()
    expect(getListFavoritePokemon).toHaveBeenCalledTimes(1)
  })
})
