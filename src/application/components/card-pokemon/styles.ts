import styled from 'styled-components/native'
import theme from '@/application/styles/theme'
import { LinearGradient } from 'expo-linear-gradient'

type TypePokemon = {
  type: string
}

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
  position: absolute;
  top: -75px;
  right: 50%;
  transform: translate(80px);
`

export const Id = styled.Text`
  background-color: transparent;
  font-family: ${theme.FONT.ROBONTO[900]};
  color: ${theme.COLORS.ROOM};
  padding-top: 45px;
`

export const Name = styled.Text`
  background-color: transparent;
  font-family: ${theme.FONT.ROBONTO[700]};
  color: black;
  font-size: 19px;
`

export const Types = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: transparent;
  padding-top: 10px;
`

export const Type = styled(LinearGradient).attrs((props: TypePokemon) => ({
  colors: typeColorPokemon(props.type),
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 }
}))<TypePokemon>`
  width: 65px;
  height: 25px;
  border-radius: 5px;
  padding-top: 2px;
  background-color: '#fff'
`

export const Text = styled.Text<TypePokemon>`
  font-family: ${theme.FONT.ROBONTO[700]};
  text-align: center;
  color: ${({ type }) => {
    if (type === 'fire') return theme.COLORS.TEXT_POKEMON.FIRE
    if (type === 'bug') return theme.COLORS.TEXT_POKEMON.BUG
    if (type === 'dark') return theme.COLORS.TEXT_POKEMON.DARK
    if (type === 'electric') return theme.COLORS.TEXT_POKEMON.ELECTRIC
    if (type === 'fairy') return theme.COLORS.TEXT_POKEMON.FAIRY
    if (type === 'fighting') return theme.COLORS.TEXT_POKEMON.FIGHTING
    if (type === 'ghost') return theme.COLORS.TEXT_POKEMON.GHOST
    if (type === 'grass') return theme.COLORS.TEXT_POKEMON.GRASS
    if (type === 'ground') return theme.COLORS.TEXT_POKEMON.GROUND
    if (type === 'ice') return theme.COLORS.TEXT_POKEMON.ICE
    if (type === 'normal') return theme.COLORS.TEXT_POKEMON.NORMAL
    if (type === 'poison') return theme.COLORS.TEXT_POKEMON.POISON
    if (type === 'psychic') return theme.COLORS.TEXT_POKEMON.PSYCHIC
    if (type === 'rock') return theme.COLORS.TEXT_POKEMON.ROCK
    if (type === 'steel') return theme.COLORS.TEXT_POKEMON.STEEL
    if (type === 'water') return theme.COLORS.TEXT_POKEMON.WATER
    return 'black'
  }};
`

const typeColorPokemon = (type: string): string[] | undefined => {
  if (type === 'fire') return [theme.COLORS.TYPE_POKEMON.FIRE, theme.COLORS.TYPE_POKEMON.FIRE]
  if (type === 'bug') return [theme.COLORS.TYPE_POKEMON.BUG, theme.COLORS.TYPE_POKEMON.BUG]
  if (type === 'dark') return [theme.COLORS.TYPE_POKEMON.DARK, theme.COLORS.TYPE_POKEMON.DARK]
  if (type === 'electric') return [theme.COLORS.TYPE_POKEMON.ELECTRIC, theme.COLORS.TYPE_POKEMON.ELECTRIC]
  if (type === 'fairy') return [theme.COLORS.TYPE_POKEMON.FAIRY, theme.COLORS.TYPE_POKEMON.FAIRY]
  if (type === 'fighting') return [theme.COLORS.TYPE_POKEMON.FIGHTING, theme.COLORS.TYPE_POKEMON.FIGHTING]
  if (type === 'ghost') return [theme.COLORS.TYPE_POKEMON.GHOST, theme.COLORS.TYPE_POKEMON.GHOST]
  if (type === 'grass') return [theme.COLORS.TYPE_POKEMON.GRASS, theme.COLORS.TYPE_POKEMON.GRASS]
  if (type === 'ground') return [theme.COLORS.TYPE_POKEMON.GROUND, theme.COLORS.TYPE_POKEMON.GROUND]
  if (type === 'ice') return [theme.COLORS.TYPE_POKEMON.ICE, theme.COLORS.TYPE_POKEMON.ICE]
  if (type === 'normal') return [theme.COLORS.TYPE_POKEMON.NORMAL, theme.COLORS.TYPE_POKEMON.NORMAL]
  if (type === 'poison') return [theme.COLORS.TYPE_POKEMON.POISON, theme.COLORS.TYPE_POKEMON.POISON]
  if (type === 'psychic') return [theme.COLORS.TYPE_POKEMON.PSYCHIC, theme.COLORS.TYPE_POKEMON.PSYCHIC]
  if (type === 'rock') return [theme.COLORS.TYPE_POKEMON.ROCK, theme.COLORS.TYPE_POKEMON.ROCK]
  if (type === 'steel') return [theme.COLORS.TYPE_POKEMON.STEEL, theme.COLORS.TYPE_POKEMON.STEEL]
  if (type === 'water') return [theme.COLORS.TYPE_POKEMON.WATER, theme.COLORS.TYPE_POKEMON.WATER]
  if (type === 'flying') return [theme.COLORS.TYPE_POKEMON.ICE, theme.COLORS.TYPE_POKEMON.STEEL]
  return [theme.COLORS.TYPE_POKEMON.ICE, theme.COLORS.TYPE_POKEMON.FIGHTING]
}
