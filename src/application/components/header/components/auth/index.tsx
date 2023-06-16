import { Link } from './styles'
import { useLogout } from '@/application/hooks'

import { MaterialIcons, AntDesign } from '@expo/vector-icons'

export const Auth: React.FC = () => {
  const logout = useLogout()
  return (
    <>
      <Link testID='auth-link' onPress={() => { logout() }}>
        <MaterialIcons name='logout' size={25} color={'#fd4f55'}/>
      </Link>
      <Link testID='auth-link'>
        <AntDesign name='heart' size={25} color={'#fd4f55'}/>
      </Link>
    </>
  )
}
