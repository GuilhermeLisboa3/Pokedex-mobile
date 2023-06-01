import React from 'react'
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'
import { Text, View } from 'react-native'
import theme from '@/application/styles/theme'

type Props = {
  color: 'success' | 'error'
  message: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Toast: React.FC<Props> = ({ message, color, setIsOpen }) => {
  const toastColor = color === 'success' ? theme.COLORS.SUCCESS : theme.COLORS.ERROR
  setTimeout(() => { setIsOpen(false) }, 1000 * 2)
  return (
    <Animated.View
    testID='toast'
    entering={FadeInUp}
    exiting={FadeOutUp}
    style={{
      top: 30,
      backgroundColor: toastColor,
      width: '90%',
      margin: '5%',
      position: 'absolute',
      borderRadius: 5,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      shadowColor: toastColor,
      shadowOpacity: 0.4,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 1 },
      elevation: 2
    }}>
    <View>
        <Text style={{
          color: '#F6F4F4',
          fontWeight: '500',
          marginLeft: 10,
          fontSize: 14
        }}>{message}</Text>
    </View>
  </Animated.View>
  )
}
