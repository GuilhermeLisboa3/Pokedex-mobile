import { type Account } from '@/domain/models'
import { createContext } from 'react'

type Props = {
  setCurrentAccount: (account: Account) => void
  getCurrentAccount: () => Promise<Account>
}

export const AccountContext = createContext<Props>(null as any)
