import { Footer } from '@/application/components'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { Linking } from 'react-native'

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn()
}))

describe('Footer', () => {
  const makeSut = (): void => { render(<Footer/>) }
  it('should call the links with correct values', () => {
    makeSut()

    fireEvent.press(screen.getAllByTestId('link')[0])
    expect(Linking.openURL).toHaveBeenCalledWith('https://www.linkedin.com/in/guilherme-gon%C3%A7alves-lisboa-abb8b0227/')
    fireEvent.press(screen.getAllByTestId('link')[1])
    expect(Linking.openURL).toHaveBeenCalledWith('https://github.com/GuilhermeLisboa3')
    fireEvent.press(screen.getAllByTestId('link')[2])
    expect(Linking.openURL).toHaveBeenCalledWith('https://www.instagram.com/guime.lisboa/')
  })
})
