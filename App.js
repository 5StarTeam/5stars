import 'expo-dev-client'
import '@env'
import React from 'react';
import { Route } from './services/RoutingService';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreBottomDrawer from './components/ExploreBottomDrawer';
import ExampleScreen from './screens/ExampleScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import VerifyScreen from './screens/VerifyScreen'
import ExploreScreen from './screens/ExploreScreen'
import UploadScreen from './screens/UploadScreen';
import { Provider } from 'react-redux';
import store from './redux/store'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name={Route.LOGIN} component={LoginScreen} />
          <Stack.Screen name={Route.VERIFY} component={VerifyScreen} />
          <Stack.Screen name={Route.HOME} component={HomeScreen} />
          <Stack.Screen name={Route.UPLOAD} component={UploadScreen} />
          <Stack.Screen name={Route.EXAMPLE} component={ExampleScreen} />
          <Stack.Screen name={Route.EXPLORE_BOTTOM_DRAWER} component={ExploreBottomDrawer} />
          <Stack.Screen name={Route.EXPLORE} component={ExploreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
