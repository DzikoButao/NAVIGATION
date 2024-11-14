import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'; 
import SignUp from './screens/signup'; 
import Client from './screens/client';
import CameraScreen from './screens/journey';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Client" component={Client}/>
        <Stack.Screen name ="Journey" component={CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}