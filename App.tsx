import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Fight from './src/Screens/Fight';
import Pokemon from './src/Screens/Pokemon';
import Profile from './src/Screens/Profile';
import Shop from './src/Screens/Shop';
import Classement from './src/Screens/Classement';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import Welcome from './src/Screens/Welcome';
import ChoosePokes from './src/Screens/ChoosePokes';
import Stats from './src/Screens/Stats';
import WildPokes from './src/Screens/WildPokes';
import Battle from './src/Screens/Battle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Fight' component={Fight} />
        <Stack.Screen name='Pokemon' component={Pokemon} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Shop' component={Shop} />
        <Stack.Screen name='Classement' component={Classement} />
        <Stack.Screen name='ChoosePokes' component={ChoosePokes} />
        <Stack.Screen name='Stats' component={Stats} />
        <Stack.Screen name='WildPokes' component={WildPokes} />
        <Stack.Screen name='Battle' component={Battle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}