import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Link = styled.Text.attrs(() => ({
  shadowColor: theme.COLORS.BOX_SHADOW,
  shadowOffset: {
    width: 0,
    height: 13
  },
  shadowOpacity: 0.24,
  shadowRadius: 14.86,
  elevation: 18
}))`
  text-align: center;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: white;
`
