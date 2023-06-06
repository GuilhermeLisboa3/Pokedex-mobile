import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

export const Container = styled.View`
  flex-direction: column;
  gap: 32px;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 5px;
  max-height: 225px;
`

export const Image = styled.Image`
  width: 260px;
  height: 70px;
  margin: 10px auto;
`

export const Search = styled.View.attrs(() => ({
  shadowColor: theme.COLORS.BOX_SHADOW,
  shadowOffset: {
    width: 0,
    height: 12
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24
}))`
  background-color: #ffffff;
  height: 40px;
  width: 85%;
  border-radius: 10px;
  padding: 5px 5px 5px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Input = styled.TextInput`
  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 10px;
  width: 90%;
`

export const ButtonIcon = styled.View.attrs(() => ({
  shadowColor: theme.COLORS.THIRD,
  shadowOffset: {
    width: 0,
    height: 18
  },
  shadowOpacity: 0.25,
  shadowRadius: 20.00,
  elevation: 24
}))`
  background-color: ${theme.COLORS.THIRD};
  width: 30px;
  height: 30px;
  border: none;
  margin-right: 10px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`

export const Navigation = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`
