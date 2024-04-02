import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Fight from './src/Screens/Fight';
import Pokemon from './src/Screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Fight' component={Fight} />
        <Stack.Screen name='Pokemon' component={Pokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}