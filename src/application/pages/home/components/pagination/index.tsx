import { ButtonPagination, ContainerPage, Text } from './styles'

import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useAnimationState } from 'moti'
import { Pressable } from 'react-native'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  count: number
  perPage: number
}

export const Pagination: React.FC<Props> = ({ count, page, perPage, setPage }) => {
  const allPages = Math.ceil(count / perPage)
  const onLeftClick = (state: 'pressIn' | 'pressOut'): void => {
    leftAnimated.transitionTo(state)
    if (page > 0) {
      setPage(page - 1)
    }
  }
  const onRightClick = (state: 'pressIn' | 'pressOut'): void => {
    rightAnimated.transitionTo(state)
    if (page + 1 !== allPages) {
      setPage(page + 1)
    }
  }

  const leftAnimated = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.8 }]
    },
    pressOut: {
      transform: [{ scale: 1 }]
    }
  })

  const rightAnimated = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.8 }]
    },
    pressOut: {
      transform: [{ scale: 1 }]
    }
  })

  return (
  <ContainerPage>
    <Pressable onPress={() => { onLeftClick('pressIn') }} accessibilityRole='link' onPressOut={() => { onLeftClick('pressOut') }}>
      <ButtonPagination state={leftAnimated}>
        <AntDesign name="arrowleft" size={25} color="white" />
      </ButtonPagination>
    </Pressable>
    <Text>{`${page + 1} de ${allPages}`}</Text>
    <Pressable onPress={() => { onRightClick('pressIn') }} accessibilityRole='link' onPressOut={() => { onRightClick('pressOut') }}>
      <ButtonPagination state={rightAnimated}>
        <AntDesign name="arrowright" size={25} color="white" />
      </ButtonPagination>
    </Pressable>
  </ContainerPage>
  )
}
