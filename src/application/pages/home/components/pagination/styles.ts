import styled from 'styled-components/native'
import theme from '@/application/styles/theme'
import { MotiView } from 'moti'

export const ContainerPage = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Text = styled.Text`
  font-size: 20px;
  font-family: ${theme.FONT.ROBONTO[700]};
`
export const ButtonPagination = styled(MotiView)`
  height: 28px;
  width: 28px;
  border-radius: 100px;
  background-color: ${theme.COLORS.THIRD};
  border: none;
  box-shadow: 3px 4px 13px #fd4f55be;
  justify-content: center;
  align-items: center;
`
