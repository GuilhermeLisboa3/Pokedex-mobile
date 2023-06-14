import { Link } from './styles'

import { MaterialIcons, AntDesign } from '@expo/vector-icons'

export const Auth: React.FC = () => {
  return (
    <>
      <Link testID='auth-link'>
        <MaterialIcons name='logout' size={25} color={'#fd4f55'}/>
      </Link>
      <Link testID='auth-link'>
        <AntDesign name='heart' size={25} color={'#fd4f55'}/>
      </Link>
    </>
  )
}
