import { Button } from '@/application/components/button'

import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'

export const NoAuth: React.FC = () => {
  const { navigate } = useNavigation<StackNavigationProp <ParamListBase>>()
  return (
    <>
      <Button width={110} height={35} text='Entrar' disabled={false} onPress={() => { navigate('Login') }}/>
      <Button width={110} height={35} text='Registrar' disabled={false} onPress={() => { navigate('SignUp') }}/>
    </>
  )
}
