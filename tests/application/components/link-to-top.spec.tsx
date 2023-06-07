import { LinkToTop } from '@/application/components'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('LinkToTop', () => {
  it('should not show LinkToTop', () => {
    render(<LinkToTop scrollMoveTop={jest.fn()}/>)

    expect(screen.queryByTestId('arrowup')).toBeFalsy()
  })
})
