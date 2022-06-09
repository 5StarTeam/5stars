import 'expo-dev-client'

import React from 'react'
import '@env'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExampleScreen from './screens/ExampleScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ExploreScreen from './screens/ExploreScreen'
import ExploreBottomDrawer from './components/ExploreBottomDrawer'

import { Provider } from 'react-redux';
import store from './redux/store'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Example" component={ExampleScreen} />
          <Stack.Screen name="Explore Bottom Drawer" component={ExploreBottomDrawer} />
          <Stack.Screen name="Explore Map" component={ExploreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
