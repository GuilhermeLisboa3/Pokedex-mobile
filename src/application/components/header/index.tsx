import { Container, Search, Input, ButtonIcon, Navigation, Image } from './styles'
import { Button } from '@/application/components/button'
import logo from '@/application/assets/pokedexLogo.png'

import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
  setNamePokemon: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const Header: React.FC<Props> = ({ setNamePokemon }) => {
  const handlerChange = (name: string): void => {
    setTimeout(() => {
      setNamePokemon(name.toLocaleLowerCase())
    }, 1000 * 1)
  }

  return (
    <>
    <Container>
      <Image source={logo} resizeMode='stretch'/>
      <Search>
        <Input testID='search-field' selectionColor='black'autoCorrect={false} autoCapitalize="none" placeholder='Buscar pokemon' onChangeText={ e => { handlerChange(e) } }/>
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
