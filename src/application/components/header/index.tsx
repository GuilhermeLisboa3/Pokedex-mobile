import { Container, Search, Input, ButtonIcon, Navigation } from './styles'
import { Button } from '@/application/components/button'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Header: React.FC = () => {
  return (
    <>
    <Container>
      <Search>
        <Input selectionColor='black'autoCorrect={false} autoCapitalize="none" placeholder='Buscar pokemon'/>
        <ButtonIcon>
          <MaterialCommunityIcons name='pokeball' size={25} color='white'/>
        </ButtonIcon>
      </Search>
      <Navigation>
        <Button width={110} height={35} text='Entrar' disabled={false}/>
        <Button width={110} height={35} text='Registrar' disabled={false}/>
      </Navigation>
    </Container>
    </>
  )
}
