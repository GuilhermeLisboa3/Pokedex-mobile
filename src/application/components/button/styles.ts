import styled from 'styled-components/native'
import theme from '@/application/styles/theme'

type PropsButton = {
  width: number
  height: number
  disabled: boolean | null | undefined
}

export const Container = styled.Pressable.attrs((props) => ({
  styled: (props: PropsButton) => ({
    width: props.width,
    height: props.height
  }),
  shadowColor: theme.COLORS.THIRD,
  shadowOffset: {
    width: 0,
    height: 18
  },
  shadowOpacity: 0.25,
  shadowRadius: 20.00,
  elevation: 24
}))<PropsButton>`
  background-color: ${({ disabled }) => disabled ? 'transparent' : theme.COLORS.THIRD};
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid ${({ disabled }) => disabled ? theme.COLORS.DISABLED : 'transparent'};
  color: red;
  transition: 0.3s ease;
  justify-content: center;
  align-items: center;
  margin: auto auto;
`
export const TextButton = styled.Text`
  color: ${({ disabled }) => disabled ? theme.COLORS.DISABLED : 'white'};
  font-size: 20px;
  font-family: ${theme.FONT.ROBONTO[700]};
`
