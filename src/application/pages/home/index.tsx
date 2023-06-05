import { Container, Main, ListPokemons, LinkToTop } from './styles'
import { CardPokemon, Header, Footer, EmptyCardPokemon } from '@/application/components'
import { Pagination } from './components'

import React from 'react'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export const Home: React.FC = () => {
  return (
  <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header/>
        <Main>
          <Pagination/>
          <ListPokemons>
            <EmptyCardPokemon/>
            <CardPokemon/>
          </ListPokemons>
        </Main>
        <Footer/>
      </Container>
      </ScrollView>
    <LinkToTop><AntDesign name="arrowup" size={20} color="white" /></LinkToTop>
  </>
  )
}
