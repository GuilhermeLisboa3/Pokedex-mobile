import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View`
  background-color: white;
  justify-content: center;
  padding: 10px;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  height: 280px;
  width: 95%;
  margin: auto auto;
  gap: 20px;
`

export const Image = styled.Image`
  width: 150px;
  height: 150px;
  margin: auto auto;
`

export const Images = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const View = styled.View`
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const Text = styled.Text`
  font-size: 18px;
  font-family: ${theme.FONT.ROBONTO[700]};
  text-align: center;
`

export const Button = styled.Text`
  background-color: ${theme.COLORS.THIRD};
  border-radius: 10px;
  width: 200px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border: 2px solid transparent;
  justify-content: center;
  align-items: center;
  margin: auto auto;
`
