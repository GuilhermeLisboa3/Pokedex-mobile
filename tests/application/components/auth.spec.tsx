import { Auth } from '@/application/components/header/components'
import { AccountContext } from '@/application/contexts'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import Navigation from '@react-navigation/native'

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn()
    })
  }
})

describe('Auth', () => {
  const useNavigation = jest.spyOn(Navigation, 'useNavigation')
  const navigation = { navigate: jest.fn() }
  const setSpy = jest.fn()

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: setSpy, getCurrentAccount: jest.fn() }}>
        <Auth/>
      </AccountContext.Provider>
    )
  }

  beforeAll(() => {
    useNavigation.mockReturnValue(navigation)
  })

  it('should call setCurrentAccount with null', async () => {
    makeSut()
    fireEvent.press(screen.getAllByTestId('auth-link')[0])
    expect(setSpy).toHaveBeenCalledWith(undefined)
  })
})
