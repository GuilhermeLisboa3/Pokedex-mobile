import { Container, Main, ListPokemon } from './styles'
import { Footer } from '@/application/components'
import { type GetListFavoritePokemon } from '@/domain/use-cases/pokemon'

import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

type Props = {
  getListFavoritePokemon: GetListFavoritePokemon
}

export const Favorite: React.FC<Props> = ({ getListFavoritePokemon }) => {
  useFocusEffect(useCallback(() => {
    getListFavoritePokemon()
  }, []))

  return (
    <>
    <ScrollView
    testID='scroll-home'
    contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Main>
          <ListPokemon>
          </ListPokemon>
        </Main>
        <Footer/>
      </Container>
    </ScrollView>
    </>
  )
}
