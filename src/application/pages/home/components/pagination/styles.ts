import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

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
export const ButtonPagination = styled.Text`
  height: 28px;
  width: 28px;
  border-radius: 100px;
  background-color: ${theme.COLORS.THIRD};
  border: none;
  box-shadow: 3px 4px 13px #fd4f55be;
  text-align: center;
  vertical-align: middle;
`
