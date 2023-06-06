import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${theme.COLORS.PRIMARY};
`

export const Main = styled.View`
  margin-top: 20px;
  flex-direction: column;
  flex-grow: 1;
`

export const ListPokemons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const LinkToTop = styled.Text`
  position: absolute;
  bottom: 20px;
  right: 15px;
  background-color: ${theme.COLORS.THIRD};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  text-align: center;
  vertical-align: middle;
`
