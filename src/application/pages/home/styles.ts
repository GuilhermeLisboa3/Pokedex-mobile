import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  background-color: ${theme.COLORS.PRIMARY};
`

export const Main = styled.View`
  flex-direction: column;
  flex-grow: 1;
  margin-top: 20px;
`

export const Image = styled.Image`
  width: 260px;
  height: 70px;
  margin: 10px auto;
`

export const ListPokemons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap:30px;
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
