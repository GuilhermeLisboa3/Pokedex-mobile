import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

type Props = { isError: string | undefined }

export const Container = styled.View<Props>`
  justify-content: flex-start;
  align-items: center;
  height: 45px;
  flex-direction: row;
  gap: 10px;
  border: 2px solid ${({ isError }) => {
    if (isError) {
      return theme.COLORS.ERROR
    } else {
      return theme.COLORS.SUCCESS
    }
  }};
  width: 100%;
  border-radius: 10px;
  padding: 10px;
`
export const TextInput = styled.TextInput.attrs(props => ({
  selectionColor: theme.COLORS.SECONDARY
}))`
  width: 82%;
  height: 45px;
  font-size: 17px;
  color: black;
`
