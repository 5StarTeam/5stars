import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExampleScreen from './screens/ExampleScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ExploreBottomSheet from './screens/ExploreBottomSheet'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Example" component={ExampleScreen} />
        <Stack.Screen name="Explore Bottom Sheet" component={ExploreBottomSheet} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
