import { type SetStorage } from '@/domain/contracts/cache'
import storage from '@react-native-async-storage/async-storage'

export class AsyncStorageAdapter {
  async set ({ key, value }: SetStorage.Input): Promise<void> {
    if (value) {
      await storage.setItem(key, JSON.stringify(value))
    } else {
      await storage.removeItem(key)
    }
  }
}
