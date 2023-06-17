import { Link } from './styles'
import { useLogout } from '@/application/hooks'

import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import { type StackNavigationProp } from '@react-navigation/stack'

export const Auth: React.FC = () => {
  const logout = useLogout()
  const { navigate } = useNavigation<StackNavigationProp <ParamListBase>>()
  return (
    <>
      <Link testID='auth-link' onPress={() => { logout() }}>
        <MaterialIcons name='logout' size={25} color={'#fd4f55'}/>
      </Link>
      <Link testID='auth-link' onPress={() => { navigate('Favorite') }}>
        <AntDesign name='heart' size={25} color={'#fd4f55'}/>
      </Link>
    </>
  )
}
