import { Container, Main, ListPokemon, LinkToTop } from './styles'
import { Pagination } from './components'
import { Header, Footer, EmptyCardPokemon, Error, CardPokemon } from '@/application/components'
import { type ListPokemons } from '@/domain/use-cases/api-pokemon'
import { type ApiPokemon } from '@/domain/models'

import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  listPokemons: ListPokemons
}

export const Home: React.FC<Props> = ({ listPokemons }) => {
  const perPage = 25
  const [listPokemon, setListPokemon] = useState<ApiPokemon[]>([])
  const [isOpenLinkToTop] = useState(false)
  const [page] = useState(0)
  const [error, setError] = useState<string | undefined>(undefined)
  const [reload, setReload] = useState(false)

  const changeReload = (): void => {
    setError(undefined)
    setReload(!reload)
  }

  useEffect(() => {
    listPokemons({ perPage, page }).then(result => { setListPokemon(result.pokemons) }).catch(error => { setError(error.message) })
  }, [page, reload])

  return (
  <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header/>
        <Main>
          <Pagination/>
          { error
            ? <Error error={error} reload={changeReload}/>
            : <ListPokemon>
                { listPokemon.length > 0
                  ? listPokemon.map(pokemon => (<CardPokemon pokemon={pokemon} key={pokemon.id}/>))
                  : <EmptyCardPokemon/>
                }
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
