import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View.attrs((props) => ({
  shadowColor: theme.COLORS.BOX_SHADOW,
  shadowOffset: {
    width: 0,
    height: 13
  },
  shadowOpacity: 0.24,
  shadowRadius: 14.86,
  elevation: 18
}))`
  position: relative;
  width: 280px;
  margin-top: 100px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 10px;
`
