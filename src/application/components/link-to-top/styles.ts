import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.Text`
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
