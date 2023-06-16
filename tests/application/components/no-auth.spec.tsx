import { NoAuth } from '@/application/components/header/components'

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

describe('NoAuth', () => {
  const useNavigation = jest.spyOn(Navigation, 'useNavigation')
  const navigation = { navigate: jest.fn() }

  const makeSut = (): void => { render(<NoAuth/>) }

  beforeAll(() => {
    useNavigation.mockReturnValue(navigation)
  })

  it('should redirect to the Login screen if click on Entrar', async () => {
    makeSut()
    fireEvent.press(screen.getByText('Entrar'))
    expect(navigation.navigate).toHaveBeenCalledWith('Login')
  })

  it('should redirect to the SignUp screen if click on Registrar', async () => {
    makeSut()
    fireEvent.press(screen.getByText('Registrar'))
    expect(navigation.navigate).toHaveBeenCalledWith('SignUp')
  })
})
