import '@testing-library/jest-native/extend-expect'
jest.mock('react-native-vector-icons', () => ({
  Feather: '',
  FontAwesome5: '',
  MaterialCommunityIcons: '',
  AntDesign: ''
}))
jest.mock('expo-linear-gradient', () => ({
  LinearGradient: ''
}))
jest.mock('react-native-shimmer-placeholder', () => 'ShimmerPlaceHolder')
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
    View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In'
    }
  }
})
