import { LinkToTop } from '@/application/components'

import React from 'react'
import { render, screen } from '@testing-library/react-native'

describe('LinkToTop', () => {
  it('should not show LinkToTop', () => {
    render(<LinkToTop scrollMoveTop={jest.fn()}/>)

    expect(screen.queryByTestId('arrowup')).toBeFalsy()
  })

  it('should show LinkToTop', () => {
    render(<LinkToTop
      scrollMoveTop={jest.fn()}
      eventScroll={{
        contentInset: { bottom: 0, left: 0, right: 0, top: 0 },
        contentOffset: { x: 0, y: 100 },
        contentSize: { width: 0, height: 100 },
        layoutMeasurement: { width: 0, height: 100 },
        zoomScale: 0
      }}
      />)

    expect(screen.queryByTestId('arrowup')).toBeTruthy()
  })
})
