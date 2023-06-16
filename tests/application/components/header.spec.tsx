import { Header } from '@/application/components'
import { AccountContext } from '@/application/contexts'

import React from 'react'
import { render, screen } from '@testing-library/react-native'
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

describe('Header', () => {
  let getSpy = jest.fn()
  const makeSut = (): void => {
    render(
      <NavigationContext.Provider value={navContext}>
        <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: getSpy }}>
          <Header setNamePokemon={jest.fn()}/>
        </AccountContext.Provider>
      </NavigationContext.Provider>
    )
  }

  beforeAll(() => {
    getSpy = jest.fn().mockResolvedValue(null)
  })

  it('should load the NoAuth header if it has no token', () => {
    makeSut()
    expect(screen.getByText('Entrar')).toBeTruthy()
    expect(screen.getByText('Registrar')).toBeTruthy()
  })

  it('should load the Auth header if it has token', async () => {
    getSpy.mockResolvedValueOnce({ token: 'any_token', name: 'any_name', email: 'any_email' })
    makeSut()
    expect(await screen.findAllByTestId('auth-link')).toBeTruthy()
  })
})
