import { Toast } from '@/application/components'

import React from 'react'
import { act, render, screen } from '@testing-library/react-native'
jest.useFakeTimers()
describe('Toats', () => {
  it('should load with correct initial state', () => {
    const setIsOpen = jest.fn()
    render(<Toast color='error' message='any_message' setIsOpen={setIsOpen} />)

    expect(screen.getByText('any_message')).toBeTruthy()
    expect(screen.getByTestId('toast')).toHaveStyle({ backgroundColor: '#fd4f55' })
    act(() => {
      jest.advanceTimersByTime(2001)
    })
    expect(setIsOpen).toHaveBeenCalledWith(false)
  })
})
