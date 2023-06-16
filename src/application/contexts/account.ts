import { type Account } from '@/domain/models'
import { createContext } from 'react'

type Props = {
  setCurrentAccount: (account: Account) => Promise<void>
  getCurrentAccount: () => Promise<Account>
}

export const AccountContext = createContext<Props>(null as any)
