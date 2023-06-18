import '@testing-library/jest-native/extend-expect'
import 'react-native-gesture-handler/jestSetup'
jest.mock('react-native-vector-icons', () => ({
  Feather: '',
  FontAwesome5: '',
  MaterialCommunityIcons: '',
  AntDesign: '',
  MaterialIcons: ''
}))
jest.mock('expo-linear-gradient', () => ({
  LinearGradient: ''
}))
jest.mock('react-native-shimmer-placeholder', () => 'ShimmerPlaceHolder')

jest.mock('moti', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const View = require('react-native').View

  return {
    MotiView: View,
    useAnimationState: jest.fn().mockReturnValue({ transitionTo: jest.fn() })
  }
})

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const View = require('react-native').View

  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    useSharedValue: jest.fn().mockImplementation(() => ({ value: 0 })),
    withTiming: jest.fn(),
    useAnimatedStyle: jest.fn(),
    View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In'
    }
  }
})
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
