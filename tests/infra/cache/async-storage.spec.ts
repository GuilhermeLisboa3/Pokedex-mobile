import { AsyncStorageAdapter } from '@/infra/cache'
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import faker from 'faker'

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

describe('AsyncStorageAdapter', () => {
  let sut: AsyncStorageAdapter
  const key: string = faker.database.column()
  const value: object = { any: faker.datatype.uuid() }

  beforeEach(async () => {
    sut = new AsyncStorageAdapter()
  })

  describe('set()', () => {
    it('should call AsyncStorage.set with correct value', async () => {
      await sut.set({ key, value })

      expect(AsyncStorageMock.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
    })

    it('should call AsyncStorage.removeItem if value is null', async () => {
      const key = faker.database.column()
      await sut.set({ key, value: undefined as any })

      expect(AsyncStorageMock.removeItem).toHaveBeenCalledWith(key)
    })
  })

  describe('get()', () => {
    it('should call LocalStorage.get with correct value', async () => {
      await AsyncStorageMock.setItem(key, JSON.stringify(value))

      const result = await sut.get({ key })

      expect(AsyncStorageMock.getItem).toHaveBeenCalledWith(key)
      expect(result).toEqual(value)
    })
  })
})
