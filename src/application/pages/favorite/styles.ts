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

export const Image = styled.Image`
  margin: 40px auto 0px;
  width: 300px;
  height: 55px;
`

export const ListPokemon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 90px;
  gap: 90px;
`

export const Text = styled.Text`
  font-family: ${theme.FONT.ROBONTO[700]};
  font-size: 18px;
`
