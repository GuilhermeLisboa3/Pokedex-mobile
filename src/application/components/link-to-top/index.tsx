import { Container } from './styles'

import React from 'react'
import { type NativeScrollEvent } from 'react-native'
import Animated, { FadeOut, FadeIn } from 'react-native-reanimated'
import { AntDesign } from '@expo/vector-icons'

type Props = { eventScroll?: NativeScrollEvent, scrollMoveTop: () => void }

export const LinkToTop: React.FC<Props> = ({ eventScroll, scrollMoveTop }) => {
  const screenPercentage = (eventScroll?: NativeScrollEvent): number => {
    if (eventScroll) {
      return ((eventScroll.layoutMeasurement.height + eventScroll.contentOffset.y) / eventScroll.contentSize.height) * 100
    }
    return 0
  }
  return (
    <>
      {
        screenPercentage(eventScroll) >= 16
          ? <Animated.View entering={FadeIn} exiting={FadeOut}>
              <Container onPress={scrollMoveTop} testID='arrowup'><AntDesign name="arrowup" size={20} color="white" /></Container>
            </Animated.View>
          : ''
      }
    </>
  )
}
