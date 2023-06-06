import { Home } from '@/application/pages/home'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('Home', () => {
  const makeSut = (): void => {
    render(<Home/>)
  }

  it('should load with correct initial state', () => {
    makeSut()

    expect(screen.getAllByTestId('emptyCardPokemon').length).toBe(3)
    expect(screen.queryByTestId('arrowup')).toBeFalsy()
  })
})
