import 'expo-dev-client'

import React from 'react'
import '@env'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExampleScreen from './screens/ExampleScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ExploreBottomSheet from './screens/ExploreBottomSheet'
import VerifyScreen from './screens/VerifyScreen'
import ExploreScreen from './screens/ExploreScreen'

import { Provider } from 'react-redux'
import store from './redux/store'
import ExploreMoreSightings from './screens/ExploreMoreSightings'
import BirdDetails from './screens/BirdDetails'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="Example" component={ExampleScreen} />
          <Stack.Screen name="Explore Bottom Sheet" component={ExploreBottomSheet} />
          <Stack.Screen name="Explore More Sightings" component={ExploreMoreSightings} />
          <Stack.Screen name="Explore Map" component={ExploreScreen} />
          <Stack.Screen name="Bird Details" component={BirdDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
