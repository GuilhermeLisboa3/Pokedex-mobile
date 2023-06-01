import { AccountParams } from '@/tests/mocks'
import { AsyncStorageAdapter } from '@/infra/cache'
import { setCurrentAccountAdapter } from '@/main/adapters'

jest.mock('@/infra/cache/async-storage')
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

describe('currentAccount', () => {
  const { name, email, token } = AccountParams
  const setSpy: jest.Mock = jest.fn()

  jest.mocked(AsyncStorageAdapter).mockImplementation(jest.fn().mockImplementation(() => ({ set: setSpy })))

  describe('set()', () => {
    it('should call setCurrentAccountAdapter with correct values', async () => {
      await setCurrentAccountAdapter({ name, email, token })

      expect(setSpy).toHaveBeenCalledWith({ key: 'pokemon-token', value: { name, email, token } })
    })
  })
})
