import { Container, Main, ListPokemon } from './styles'
import { Pagination } from './components'
import { Header, Footer, EmptyCardPokemon, Error, PokemonCardAnimation, LinkToTop } from '@/application/components'
import { type GetDataPokemon, type ListPokemons } from '@/domain/use-cases/api-pokemon'
import { type ApiPokemon } from '@/domain/models'
import { AccountContext } from '@/application/contexts'
import { type GetListFavoritePokemon } from '@/domain/use-cases/pokemon'

import React, { useEffect, useState, useRef, useContext } from 'react'
import { ScrollView, type NativeScrollEvent } from 'react-native'

type Props = {
  listPokemons: ListPokemons
  getDataPokemon: GetDataPokemon
  getListFavoritePokemon: GetListFavoritePokemon
}

export const Home: React.FC<Props> = ({ listPokemons, getDataPokemon, getListFavoritePokemon }) => {
  const { getCurrentAccount } = useContext(AccountContext)
  const scrollRef = useRef<ScrollView>(null)
  const [listPokemon, setListPokemon] = useState<ApiPokemon[]>([])
  const [namePokemon, setNamePokemon] = useState<string | undefined>(undefined)

  const [eventScroll, setEventScroll] = useState<NativeScrollEvent>()

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
    getCurrentAccount().then(result => {
      if (result?.token) {
        getListFavoritePokemon()
      }
    })
    setListPokemon([])
    listPokemons({ perPage, page: page * perPage })
      .then(result => {
        setListPokemon(result.pokemons)
        setCount(result.count)
      })
      .catch(error => { setError(error.message) })
  }, [page, reload])

  useEffect(() => { searchPokemon(namePokemon) }, [namePokemon])

  const handlerScrollMoveTop = (): void => { scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true }) }

  const searchPokemon = async (namePokemon?: string): Promise<void> => {
    if (namePokemon === undefined) return
    if (namePokemon.length === 0) {
      changeReload()
      return
    }
    try {
      const { pokemon } = await getDataPokemon({ idOrName: namePokemon })
      setListPokemon([pokemon])
    } catch (error) {
      setListPokemon([])
    }
  }

  return (
  <>
    <ScrollView
    testID='scroll-home'
    contentContainerStyle={{ flexGrow: 1 }}
    onScroll={event => { setEventScroll(event.nativeEvent) }}
    ref={scrollRef}>
      <Container>
        <Header setNamePokemon={setNamePokemon}/>
        <Main>
          <Pagination count={count} page={page} setPage={setPage} perPage={perPage}/>
          { error
            ? <Error error={error} reload={changeReload}/>
            : <ListPokemon>
                { listPokemon.length > 0
                  ? listPokemon.map(pokemon => (<PokemonCardAnimation pokemon={pokemon} key={pokemon.id}/>))
                  : <EmptyCardPokemon quantity={3}/>
                }
              </ListPokemon>
          }
        </Main>
        <Footer/>
      </Container>
    </ScrollView>
    <LinkToTop eventScroll={eventScroll} scrollMoveTop={handlerScrollMoveTop}/>
  </>
  )
}
