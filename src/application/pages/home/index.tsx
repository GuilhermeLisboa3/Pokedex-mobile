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
  const [listPokemon, setListPokemon] = useState<ApiPokemon[]>([])

  const [isOpenLinkToTop] = useState(false)

  const perPage = 25
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(0)
  const [error, setError] = useState<string | undefined>(undefined)
  const [reload, setReload] = useState(false)

  const changeReload = (): void => {
    setError(undefined)
    setReload(!reload)
  }

  useEffect(() => {
    setListPokemon([])
    listPokemons({ perPage, page: page * perPage })
      .then(result => {
        setListPokemon(result.pokemons)
        setCount(result.count)
      })
      .catch(error => { setError(error.message) })
  }, [page, reload])

  return (
  <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header/>
        <Main>
          <Pagination count={count} page={page} setPage={setPage} perPage={perPage}/>
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
