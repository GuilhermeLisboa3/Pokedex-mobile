import styled from 'styled-components/native'
import theme from '@/application/styles/theme'
import { BgColorPokemon, colorPokemon } from '../styles'
import { LinearGradient } from 'expo-linear-gradient'

type AbilityPokemon = {
  ability: string
}

export const Container = styled.View`
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const CardDataPokemon = styled.View.attrs(() => ({
  shadowColor: theme.COLORS.BOX_SHADOW,
  shadowOffset: {
    width: 0,
    height: 12
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24
}))`
  background-color: white;
  z-index: 1;
  width: 380px;
  height: 800px;
  border-radius: 10px;
  padding: 10px;
`

export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Icon = styled.Text`
  text-align: center;
  vertical-align: middle;
`

export const Image = styled.Image`
  margin: 0 auto;
`

export const Description = styled.Text`
  font-family: ${theme.FONT.ROBONTO[400]};
  text-align: center;
`

export const Skills = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: transparent;
  padding-top: 10px;
`
export const Ability = styled(LinearGradient).attrs((props: AbilityPokemon) => ({
  colors: BgColorPokemon(props.ability),
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 }
}))<AbilityPokemon>`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border-radius: 40px;
`

export const TextAbility = styled.Text<AbilityPokemon>`
  color: ${({ ability }) => colorPokemon(ability)};
  background-color: white;
  border-radius: 40px;
  width: 145px;
  height: 35px;
  margin: auto auto;
  text-align: center;
  vertical-align: middle;
  font-family: ${theme.FONT.ROBONTO[500]};
  font-size: 18px;
`

export const Body = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const BodyData = styled.View`
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`

export const BodyDataValue = styled.Text.attrs((props) => ({
  shadowColor: theme.COLORS.ROOM,
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
  background-color: ${theme.COLORS.PRIMARY};
  width: 150px;
  height: 40px;
  border-radius: 40px;
  font-family: ${theme.FONT.ROBONTO[700]};
  font-size: 18px;
`
