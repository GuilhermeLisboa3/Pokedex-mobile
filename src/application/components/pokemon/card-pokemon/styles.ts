import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View`
  position: relative;
`

export const IconContainer = styled.View`
  position: absolute;
  background-color: transparent;
  top: 100px;
  right: 0px;
  width: 35px;
  height: 30px;
  border: none;
  z-index: 2;
`

export const Card = styled.View.attrs((props) => ({
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
  margin: 0;
  width: 280px;
  margin-top: 90px;
  height: 180px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
`
export const Image = styled.Image`
  position: absolute;
  top: -75px;
  right: 50%;
  transform: translate(80px);
`
