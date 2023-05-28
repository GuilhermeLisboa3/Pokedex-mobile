import { SignUp } from '@/application/pages/signup'
import { AccountParams, populateField } from '@/tests/mocks'
import { type Validator } from '@/application/validation'

import React from 'react'
import { render, screen } from '@testing-library/react-native'
import { type MockProxy, mock } from 'jest-mock-extended'

describe('SignUp', () => {
  const { name, email, password, passwordConfirmation } = AccountParams

  const validator: MockProxy<Validator> = mock()

  const populateFields = (): void => {
    populateField('input-name', name)
    populateField('input-email', email)
    populateField('input-password', password)
    populateField('input-passwordConfirmation', passwordConfirmation)
  }

  const makeSut = (): void => { render(<SignUp validator={validator}/>) }

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
})
