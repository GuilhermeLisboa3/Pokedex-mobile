import { Header } from '@/application/components'
import { AccountContext } from '@/application/contexts'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('Header', () => {
  const getSpy = jest.fn().mockResolvedValue(null)
  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: getSpy }}>
        <Header setNamePokemon={jest.fn()}/>
      </AccountContext.Provider>
    )
  }

  it('should load the NoAuth header if it has no token', () => {
    makeSut()
    expect(screen.getByText('Entrar')).toBeTruthy()
    expect(screen.getByText('Registrar')).toBeTruthy()
  })
})
