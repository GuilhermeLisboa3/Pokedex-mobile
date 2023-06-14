import { Header } from '@/application/components'
import { AccountContext } from '@/application/contexts'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('Header', () => {
  let getSpy = jest.fn()
  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: getSpy }}>
        <Header setNamePokemon={jest.fn()}/>
      </AccountContext.Provider>
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
