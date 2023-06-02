import { Login } from '@/application/pages/login'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('SignUp', () => {
  const makeSut = (): void => { render(<Login/>) }

  it('should load with correct initial state', () => {
    makeSut()

    expect(screen.getByTestId('container-email')).toHaveStyle({ borderColor: '#fd4f55' })
    expect(screen.getByText('Registrar')).toBeTruthy()
  })
})
