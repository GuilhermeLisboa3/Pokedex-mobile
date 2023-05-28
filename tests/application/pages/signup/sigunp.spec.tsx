import { SignUp } from '@/application/pages/signup'
import { AccountParams, populateField } from '@/tests/mocks'
import { type Validator } from '@/application/validation'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { type MockProxy, mock } from 'jest-mock-extended'

describe('SignUp', () => {
  const { name, email, password, passwordConfirmation } = AccountParams

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
})
