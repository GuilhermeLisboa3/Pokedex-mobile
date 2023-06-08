import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

type TypeStarProps = {
  star: string
}

export const Stars = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Star = styled.View`
  width: 35px;
  height: 60px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.COLORS.PRIMARY};
`

export const TypeStar = styled.Text<TypeStarProps>`
  text-align: center;
  vertical-align: middle;
  width: 32px;
  height: 30px;
  margin: 2px auto 0;
  border-radius: 100px;
  color: white;
  font-family: ${theme.FONT.ROBONTO[900]};
  font-size: 15px;
  background-color: ${({ star }) => {
    if (star === 'hp') return theme.COLORS.STAR.HP
    if (star === 'atk') return theme.COLORS.STAR.ATK
    if (star === 'def') return theme.COLORS.STAR.DEF
    if (star === 'spa') return theme.COLORS.STAR.SPA
    if (star === 'spd') return theme.COLORS.STAR.SPD
    if (star === 'spo') return theme.COLORS.STAR.SPO
  }};
`

export const Text = styled.Text`
  text-align: center;
  vertical-align: middle;
  font-family: ${theme.FONT.ROBONTO[700]};
  font-size: 15px;
`
