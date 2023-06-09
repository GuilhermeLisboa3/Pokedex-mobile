import { SignUp } from '@/application/pages/signup'
import { AccountParams, populateField } from '@/tests/mocks'
import { type Validator } from '@/application/validation'

import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native'
import { type MockProxy, mock } from 'jest-mock-extended'
import { FieldInUseError } from '@/domain/errors'
import Navigation from '@react-navigation/native'

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn()
    })
  }
})

describe('SignUp', () => {
  const { name, email, password, passwordConfirmation } = AccountParams
  const useNavigation = jest.spyOn(Navigation, 'useNavigation')
  const navigation = { navigate: jest.fn() }

  const validator: MockProxy<Validator> = mock()
  const addAccount = jest.fn()

  const populateFields = (): void => {
    populateField('input-name', name)
    populateField('input-email', email)
    populateField('input-password', password)
    populateField('input-passwordConfirmation', passwordConfirmation)
  }

  const simulateSubmit = (): void => {
    populateFields()
    fireEvent.press(screen.getByRole('button', { name: 'Registrar' }))
  }

  const makeSut = (): void => { render(<SignUp validator={validator} addAccount={addAccount}/>) }

  beforeAll(() => {
    useNavigation.mockReturnValue(navigation)
    validator.validate.mockReturnValue(undefined)
  })

  it('should load with correct initial state', () => {
    validator.validate.mockReturnValueOnce('error')

    makeSut()

    expect(screen.getByTestId('container-name')).toHaveStyle({ borderColor: '#fd4f55' })
    expect(screen.getByText('Registrar')).toBeTruthy()
  })

  it('should call Validator with correct input', () => {
    makeSut()

    populateFields()

    expect(validator.validate).toHaveBeenCalledWith('name', { name })
    expect(validator.validate).toHaveBeenCalledWith('email', { email })
    expect(validator.validate).toHaveBeenCalledWith('password', { password })
    expect(validator.validate).toHaveBeenCalledWith('passwordConfirmation', { password, passwordConfirmation })
  })

  it('should danger input if Validator return error', () => {
    makeSut()
    validator.validate.mockReturnValueOnce('error')

    populateFields()

    expect(screen.getByTestId('container-name')).toHaveStyle({ borderColor: '#fd4f55' })
  })

  it('should success input if Validator return undefined', () => {
    makeSut()

    populateFields()

    expect(screen.getByTestId('container-name')).toHaveStyle({ borderColor: '#198754' })
  })

  it('should enable submit button if form is valid', () => {
    makeSut()

    populateFields()

    expect(screen.getByRole('button', { name: 'Registrar' })).toBeEnabled()
  })

  it('should call addAccount with correct input', async () => {
    makeSut()

    simulateSubmit()

    expect(addAccount).toHaveBeenCalledWith({ name, email, password })
  })

  it('should call addAccount only once', async () => {
    makeSut()

    simulateSubmit()
    fireEvent.press(screen.getByRole('button', { name: 'Registrar' }))

    expect(addAccount).toHaveBeenCalledTimes(1)
  })

  it('should not call AddAccount if form is invalid', async () => {
    makeSut()
    validator.validate.mockReturnValueOnce('error')

    simulateSubmit()

    expect(addAccount).not.toHaveBeenCalledTimes(1)
  })

  it('should show toast if AddAccount return error', async () => {
    makeSut()
    const error = new FieldInUseError('email')
    addAccount.mockRejectedValueOnce(error)

    simulateSubmit()
    await waitFor(() => screen.getByTestId('toast'))

    expect(screen.getByTestId('toast')).toBeTruthy()
  })

  it('should redirect to the Home screen if click on image', async () => {
    makeSut()
    fireEvent.press(screen.getByTestId('logo'))
    expect(navigation.navigate).toHaveBeenCalledWith('Home')
  })

  it('should redirect to the Login screen if click on the link', async () => {
    makeSut()
    fireEvent.press(screen.getByText('Entrar'))
    expect(navigation.navigate).toHaveBeenCalledWith('Login')
  })
})
