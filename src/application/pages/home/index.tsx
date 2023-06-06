import { Container, Main, ListPokemon, LinkToTop } from './styles'
import { Pagination } from './components'
import { Header, Footer, EmptyCardPokemon, Error } from '@/application/components'
import { type ListPokemons } from '@/domain/use-cases/api-pokemon'

import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  listPokemons: ListPokemons
}

export const Home: React.FC<Props> = ({ listPokemons }) => {
  const perPage = 25
  const [isOpenLinkToTop] = useState(false)
  const [page] = useState(0)
  const [error] = useState<string | undefined>(undefined)

  useEffect(() => { listPokemons({ perPage, page }) }, [page])

  return (
  <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header/>
        <Main>
          <Pagination/>
          { error
            ? <Error/>
            : <ListPokemon>
                <EmptyCardPokemon/>
              </ListPokemon>
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
