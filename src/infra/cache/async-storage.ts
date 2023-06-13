import { type SetStorage, type GetStorage } from '@/domain/contracts/cache'
import storage from '@react-native-async-storage/async-storage'

export class AsyncStorageAdapter {
  async set ({ key, value }: SetStorage.Input): Promise<void> {
    if (value) {
      await storage.setItem(key, JSON.stringify(value))
    } else {
      await storage.removeItem(key)
    }
  }

  async get ({ key }: GetStorage.Input): Promise<any> {
    const value = await storage.getItem(key)
    return JSON.parse(value!)
  }
}
