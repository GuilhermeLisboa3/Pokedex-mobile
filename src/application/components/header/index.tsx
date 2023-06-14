import { Container, Search, Input, ButtonIcon, Navigation, Image } from './styles'
import logo from '@/application/assets/pokedexLogo.png'
import { NoAuth, Auth } from './components'
import { AccountContext } from '@/application/contexts'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState, useContext, useEffect } from 'react'

type Props = {
  setNamePokemon: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const Header: React.FC<Props> = ({ setNamePokemon }) => {
  const [token, setToken] = useState<string | undefined>()
  const { getCurrentAccount } = useContext(AccountContext)
  useEffect(() => { getCurrentAccount().then(account => { setToken(account?.token) }) }, [])

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
      {
        token
          ? <Auth/>
          : <NoAuth/>
      }
      </Navigation>
    </Container>
    </>
  )
}
