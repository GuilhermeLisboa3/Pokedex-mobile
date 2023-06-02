import { Login } from '@/application/pages/login'
import { AccountParams, populateField } from '@/tests/mocks'
import { type Validator } from '@/application/validation'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { type MockProxy, mock } from 'jest-mock-extended'

describe('SignUp', () => {
  const { email, password } = AccountParams
  const validator: MockProxy<Validator> = mock()
  const authentication = jest.fn()

  const populateFields = (): void => {
    populateField('input-email', email)
    populateField('input-password', password)
  }

  const simulateSubmit = (): void => {
    populateFields()
    fireEvent.press(screen.getByRole('button', { name: 'Entrar' }))
  }

  const makeSut = (): void => { render(<Login validator={validator} authentication={authentication}/>) }

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
})
