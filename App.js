//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';


//here we import the properties like text, buttons etc from react native
import {} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Loginscreen1';
import { Displaycredentials } from './Displaycredentials';
import SplashScreen from 'react-native-splash-screen'


export default function App(){
  
  const Stack = createNativeStackNavigator();

  useEffect(()=> {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name='LoginScreen' component={Login}/>
        <Stack.Screen name='Display Details' component={Displaycredentials}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
