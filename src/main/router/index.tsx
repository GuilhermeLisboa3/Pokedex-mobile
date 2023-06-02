import { createStackNavigator } from '@react-navigation/stack'
import { MakeSignUp, MakeLogin } from '@/main/factories/application/pages'
import { AccountContext } from '@/application/contexts'
import { setCurrentAccountAdapter } from '@/main/adapters'

const { Navigator, Screen } = createStackNavigator()

export const Router: React.FC = () => {
  return (
    <AccountContext.Provider value={{ setCurrentAccount: setCurrentAccountAdapter }}>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Screen name="Login" component={MakeLogin}/>
        <Screen name="SignUp" component={MakeSignUp}/>
      </Navigator>
    </AccountContext.Provider>
  )
}
