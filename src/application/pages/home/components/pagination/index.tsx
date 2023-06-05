import { ButtonPagination, ContainerPage, Text } from './styles'

import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export const Pagination: React.FC = () => {
  return (
  <ContainerPage>
    <ButtonPagination><AntDesign name="arrowleft" size={25} color="white" /></ButtonPagination>
    <Text>1 de 20</Text>
    <ButtonPagination><AntDesign name="arrowright" size={25} color="white" /></ButtonPagination>
  </ContainerPage>
  )
}
