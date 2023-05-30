import { Input } from '@/application/components'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'

describe('Input', () => {
  it('should change state when you click', () => {
    const setSecurity = jest.fn()
    render(<Input testID='test' isError='error' setChange={jest.fn()} iconViewPassword security={false} setSecurity={setSecurity} />)

    fireEvent.press(screen.getByRole('button'))
    expect(setSecurity).toHaveBeenCalledWith(true)
  })
})
