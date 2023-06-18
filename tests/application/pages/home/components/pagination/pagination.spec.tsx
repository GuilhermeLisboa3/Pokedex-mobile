import { Pagination } from '@/application/pages/home/components'

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import moti from 'moti'

describe('Pagination', () => {
  const setPageSpy = jest.fn()
  const useAnimationState = jest.spyOn(moti, 'useAnimationState')
  const transitionToSpy = jest.fn()

  beforeAll(() => {
    useAnimationState.mockImplementation(jest.fn().mockImplementation(() => ({ transitionTo: transitionToSpy })))
  })
  it('should call setPage with correct value', async () => {
    render(<Pagination count={50} perPage={25} page={2} setPage={setPageSpy}/>)
    fireEvent.press(screen.getAllByRole('link')[0])
    expect(setPageSpy).toHaveBeenCalledWith(1)
  })

  it('should call setPage with correct value', async () => {
    render(<Pagination count={50} perPage={25} page={0} setPage={setPageSpy}/>)
    fireEvent.press(screen.getAllByRole('link')[1])
    expect(setPageSpy).toHaveBeenCalledWith(1)
  })

  it('should not call setPage with correct value', async () => {
    render(<Pagination count={50} perPage={25} page={0} setPage={setPageSpy}/>)
    fireEvent.press(screen.getAllByRole('link')[0])
    expect(setPageSpy).not.toHaveBeenCalled()
  })

  it('should not call setPage with correct value', async () => {
    render(<Pagination count={50} perPage={25} page={1} setPage={setPageSpy}/>)
    fireEvent.press(screen.getAllByRole('link')[1])
    expect(setPageSpy).not.toHaveBeenCalled()
  })

  it('should call method with correct value', async () => {
    render(<Pagination count={50} perPage={25} page={1} setPage={setPageSpy}/>)
    fireEvent(screen.getAllByRole('link')[0], 'pressOut')
    expect(transitionToSpy).toHaveBeenCalledWith('pressOut')
    fireEvent(screen.getAllByRole('link')[1], 'pressOut')
    expect(transitionToSpy).toHaveBeenCalledWith('pressOut')
  })
})
