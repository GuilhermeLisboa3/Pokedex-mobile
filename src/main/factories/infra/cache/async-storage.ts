import { AsyncStorageAdapter } from '@/infra/cache'
export const makeAsyncStorage = (): AsyncStorageAdapter => {
  return new AsyncStorageAdapter()
}
