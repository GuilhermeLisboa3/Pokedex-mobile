import { ButtonPagination, ContainerPage, Text } from './styles'

import React from 'react'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  count: number
  perPage: number
}

export const Pagination: React.FC<Props> = ({ count, page, perPage, setPage }) => {
  const allPages = Math.ceil(count / perPage)
  const onLeftClick = (): void => {
    if (page > 0) {
      setPage(page - 1)
    }
  }
  const onRightClick = (): void => {
    if (page + 1 !== allPages) {
      setPage(page + 1)
    }
  }

  return (
  <ContainerPage>
    <ButtonPagination onPress={onLeftClick} accessibilityRole='link'><AntDesign name="arrowleft" size={25} color="white" /></ButtonPagination>
    <Text>{`${page + 1} de ${allPages}`}</Text>
    <ButtonPagination onPress={onRightClick} accessibilityRole='link'><AntDesign name="arrowright" size={25} color="white" /></ButtonPagination>
  </ContainerPage>
  )
}
