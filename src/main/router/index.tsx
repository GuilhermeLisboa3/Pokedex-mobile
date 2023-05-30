import { createStackNavigator } from '@react-navigation/stack'
import { MakeSignUp } from '@/main/factories/application/pages/signup'

const { Navigator, Screen } = createStackNavigator()

export const Router: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignUp" component={MakeSignUp}/>
    </Navigator>
  )
}
