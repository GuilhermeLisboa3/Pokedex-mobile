import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${theme.COLORS.PRIMARY};
`

export const Title = styled.Text`
  text-align: center;
  font-size: 25px;
  margin-top: 40px;
  font-family: ${theme.FONT.ROBONTO[700]};
`

export const Image = styled.Image`
  margin: 40px auto 0px;
  width: 300px;
  height: 55px;
`

export const ContainerInputs = styled.View`
  margin-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
`

export const TextLink = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  font-family: ${theme.FONT.ROBONTO[400]};
`

export const NavigationLink = styled.Text`
  color: ${theme.COLORS.THIRD};
  font-family: ${theme.FONT.ROBONTO[500]} 
`
