import styled from 'styled-components/native'
import theme from '@/application/styles/theme'
import Animated from 'react-native-reanimated'

export const AnimatedView = styled(Animated.View).attrs((props) => ({
  shadowColor: theme.COLORS.BOX_SHADOW,
  shadowOffset: {
    width: 0,
    height: 13
  },
  shadowOpacity: 0.24,
  shadowRadius: 14.86,
  elevation: 18
}))`
  margin: 0;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
`
