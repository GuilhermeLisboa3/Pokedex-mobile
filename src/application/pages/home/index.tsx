import { Container, Main, ListPokemons, LinkToTop, Image } from './styles'
import { CardPokemon, Header, Footer } from '@/application/components'
import { Pagination } from './components'
import logo from '@/application/assets/pokedexLogo.png'

import React from 'react'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <ScrollView>
        <Image source={logo} resizeMode='stretch'/>
        <Header/>
        <Main>
          <Pagination/>
          <ListPokemons>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
            <CardPokemon/>
          </ListPokemons>
        </Main>
        <Footer/>
        </ScrollView>
        <LinkToTop><AntDesign name="arrowup" size={20} color="white" /></LinkToTop>
      </Container>
    </>
  )
}
