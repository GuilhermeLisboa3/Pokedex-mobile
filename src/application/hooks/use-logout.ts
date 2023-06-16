import { AccountContext } from '@/application/contexts'

import { useContext } from 'react'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'

type ResultType = () => Promise<void>

export const useLogout = (): ResultType => {
  const { setCurrentAccount } = useContext(AccountContext)
  const { navigate } = useNavigation<StackNavigationProp <ParamListBase>>()
  return async (): Promise<void> => {
    await setCurrentAccount(undefined as any)
    navigate('Login')
  }
}
