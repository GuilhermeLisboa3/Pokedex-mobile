import { createStackNavigator } from '@react-navigation/stack'
import { MakeSignUp, MakeLogin, MakeHome, MakeFavorite } from '@/main/factories/application/pages'
import { AccountContext } from '@/application/contexts'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'

const { Navigator, Screen } = createStackNavigator()

export const Router: React.FC = () => {
  return (
    <AccountContext.Provider value={{ setCurrentAccount: setCurrentAccountAdapter, getCurrentAccount: getCurrentAccountAdapter }}>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Screen name="Home" component={MakeHome}/>
        <Screen name="Favorite" component={MakeFavorite}/>
        <Screen name="Login" component={MakeLogin}/>
        <Screen name="SignUp" component={MakeSignUp}/>
      </Navigator>
    </AccountContext.Provider>
  )
}
