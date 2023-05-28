import theme from '@/application/styles/theme'
import { SignUp } from '@/application/pages/signup'

import { ActivityIndicator, StatusBar, View } from 'react-native'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components'
import React from 'react'

export const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, backgroundColor: theme.COLORS.PRIMARY }}>
        <StatusBar translucent={false} backgroundColor={theme.COLORS.PRIMARY} />
        <SignUp/>
      </View>
    </ThemeProvider>
    </>
  )
}
