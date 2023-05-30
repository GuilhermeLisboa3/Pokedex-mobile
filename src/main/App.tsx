import theme from '@/application/styles/theme'
import { Router } from '@/main/router'

import { ActivityIndicator, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
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
    <NavigationContainer >
      <StatusBar translucent={false} backgroundColor={'#F7F8FA'} />
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </NavigationContainer>
    </>
  )
}
