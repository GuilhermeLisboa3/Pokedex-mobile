import { Login } from '@/application/pages/login'
import { AccountParams, populateField } from '@/tests/mocks'
import { type Validator } from '@/application/validation'

import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { type MockProxy, mock } from 'jest-mock-extended'
import { InvalidCredentialsError } from '@/domain/errors'
import { AccountContext } from '@/application/contexts'
import Navigation from '@react-navigation/native'

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn()
    })
  }
})

describe('Login', () => {
  const { email, password, name, token } = AccountParams
  const useNavigation = jest.spyOn(Navigation, 'useNavigation')
  const navigation = { navigate: jest.fn() }
  const validator: MockProxy<Validator> = mock()
  const setCurrentAccountMock = jest.fn()
  const authentication = jest.fn()

  const populateFields = (): void => {
    populateField('input-email', email)
    populateField('input-password', password)
  }

  const simulateSubmit = (): void => {
    populateFields()
    fireEvent.press(screen.getByRole('button', { name: 'Entrar' }))
  }

  beforeAll(() => {
    useNavigation.mockReturnValue(navigation)
    validator.validate.mockReturnValue(undefined)
    authentication.mockResolvedValue({ name, email, token })
  })

  const makeSut = (): void => {
    render(
      <AccountContext.Provider value={{ setCurrentAccount: setCurrentAccountMock, getCurrentAccount: jest.fn() }}>
        <Login validator={validator} authentication={authentication}/>
      </AccountContext.Provider>
    )
  }

  it('should load with correct initial state', () => {
    validator.validate.mockReturnValueOnce('error')
    makeSut()

    expect(screen.getByTestId('container-email')).toHaveStyle({ borderColor: '#fd4f55' })
    expect(screen.getByText('Registrar')).toBeTruthy()
  })

  it('should call Validator with correct input', () => {
    makeSut()

    populateFields()

    expect(validator.validate).toHaveBeenCalledWith('email', { email })
    expect(validator.validate).toHaveBeenCalledWith('password', { password })
  })

  it('should danger input if Validator return error', () => {
    makeSut()
    validator.validate.mockReturnValueOnce('error')

    populateFields()

    expect(screen.getByTestId('container-email')).toHaveStyle({ borderColor: '#fd4f55' })
  })

  it('should success input if Validator return undefined', () => {
    makeSut()

    populateFields()

    expect(screen.getByTestId('container-email')).toHaveStyle({ borderColor: '#198754' })
  })

  it('should enable submit button if form is valid', () => {
    makeSut()

    populateFields()

    expect(screen.getByRole('button', { name: 'Entrar' })).toBeEnabled()
  })

  it('should call Authentication with correct input', async () => {
    makeSut()

    simulateSubmit()

    expect(authentication).toHaveBeenCalledWith({ email, password })
  })

  it('should call Authentication only once', async () => {
    makeSut()

    simulateSubmit()
    fireEvent.press(screen.getByRole('button', { name: 'Entrar' }))

    expect(authentication).toHaveBeenCalledTimes(1)
  })

  it('should not call Authentication if form is invalid', async () => {
    makeSut()
    validator.validate.mockReturnValueOnce('error')

    populateFields()

    expect(authentication).not.toHaveBeenCalledTimes(1)
  })

  it('should show alert error if Authentication fails', async () => {
    makeSut()
    authentication.mockRejectedValueOnce(new InvalidCredentialsError())

    simulateSubmit()
    await waitFor(() => screen.getByTestId('toast'))

    expect(screen.getByTestId('toast')).toBeTruthy()
  })

  it('should save account data on asyncStorage and go to home page', async () => {
    makeSut()

    simulateSubmit()
    await waitFor(() => screen.getByText('Registrar'))

    expect(setCurrentAccountMock).toHaveBeenCalledWith({ name, email, token })
  })

  it('should redirect to the Home screen if click on image', async () => {
    makeSut()
    fireEvent.press(screen.getByTestId('logo'))
    expect(navigation.navigate).toHaveBeenCalledWith('Home')
  })

  it('should redirect to the SignUp screen if click on the link', async () => {
    makeSut()
    fireEvent.press(screen.getByText('Registrar'))
    expect(navigation.navigate).toHaveBeenCalledWith('SignUp')
  })
})
