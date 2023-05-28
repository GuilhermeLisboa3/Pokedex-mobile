import { SignUp } from '@/application/pages/signup'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('SignUp', () => {
  const makeSut = (): void => { render(<SignUp/>) }

  it('should load with correct initial state', () => {
    makeSut()

    expect(screen.getByTestId('container-name')).toHaveStyle({ borderColor: '#fd4f55' })
    expect(screen.getByText('Registrar')).toBeTruthy()
  })
})
