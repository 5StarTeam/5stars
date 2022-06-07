import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleScreen from './screens/ExampleScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
import { Route } from './services/RoutingService';
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name={Route.Login} component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name={Route.Home} component={HomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name={Route.Upload} component={UploadScreen} />
          <Stack.Screen options={{ headerShown: false }} name={Route.Example} component={ExampleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


