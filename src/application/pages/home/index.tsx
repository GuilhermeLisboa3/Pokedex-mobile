import { Container, Main, ListPokemons, LinkToTop } from './styles'
import { Header, Footer, EmptyCardPokemon, Error } from '@/application/components'
import { Pagination } from './components'

import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export const Home: React.FC = () => {
  const [isOpenLinkToTop] = useState(false)
  return (
  <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header/>
        <Main>
          <Pagination/>
          { isOpenLinkToTop
            ? <Error/>
            : <ListPokemons>
                <EmptyCardPokemon/>
              </ListPokemons>
          }
        </Main>
        <Footer/>
      </Container>
      </ScrollView>
    { isOpenLinkToTop
      ? <LinkToTop testID='arrowup'><AntDesign name="arrowup" size={20} color="white" /></LinkToTop>
      : ''
    }
  </>
  )
}
