import { AccountParams } from '@/tests/mocks'
import { AsyncStorageAdapter } from '@/infra/cache'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'

jest.mock('@/infra/cache/async-storage')
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

describe('currentAccount', () => {
  const { name, email, token } = AccountParams
  const setSpy: jest.Mock = jest.fn()
  const getSpy: jest.Mock = jest.fn()

  jest.mocked(AsyncStorageAdapter).mockImplementation(jest.fn().mockImplementation(() => ({ set: setSpy, get: getSpy })))

  describe('set()', () => {
    it('should call setCurrentAccountAdapter with correct values', async () => {
      await setCurrentAccountAdapter({ name, email, token })

      expect(setSpy).toHaveBeenCalledWith({ key: 'pokemon-token', value: { name, email, token } })
    })
  })

  describe('get()', () => {
    it('should call getCurrentAccountAdapter with correct values', async () => {
      getSpy.mockReturnValueOnce({ name, email, token })

      const result = await getCurrentAccountAdapter()

      expect(getSpy).toHaveBeenCalledWith({ key: 'pokemon-token' })
      expect(result).toEqual({ name, email, token })
    })
  })
})
