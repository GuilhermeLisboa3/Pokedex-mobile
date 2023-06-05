import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin: 32px 0 20px;
`

export const Name = styled.Text`
  font-family: ${theme.FONT.ROBONTO[700]};
`

export const Navigate = styled.View`
  flex-direction: row;
  gap: 10px;
`

export const Link = styled.Text`
  background-color: ${theme.COLORS.THIRD};
  width: 30px;
  height: 30px;
  border-radius: 100px;
  text-align: center;
  vertical-align: middle;
`
