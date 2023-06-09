import { type Account } from '@/domain/models'
import { makeAsyncStorage } from '@/main/factories/infra/cache'

export const setCurrentAccountAdapter = async (account: Account): Promise<void> => { await makeAsyncStorage().set({ key: 'pokemon-token', value: account }) }
export const getCurrentAccountAdapter = async (): Promise<Account> => await makeAsyncStorage().get({ key: 'pokemon-token' })
