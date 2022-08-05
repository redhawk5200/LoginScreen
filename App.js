//to change a data type dynamically you have to import {useState} from react library
import React, { useEffect, useState } from 'react';


//here we import the properties like text, buttons etc from react native
import { Alert } from 'react-native';

import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Loginscreen1';
import { Displaycredentials } from './Displaycredentials';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'


export default function App({ navigation }) {

  const Stack = createNativeStackNavigator();
  const [email, setEmail] = useState('')

  const getData = async () => {
    try {
      let email = await AsyncStorage.getItem('email')
      console.log('VALUE:', email)
      setEmail(email)
      if (email == 'Abdul') {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'Display Details' }]
        }))
      }
      else {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }]
        }))
      }
    } catch (error) {
      // Alert.alert(error);
    }
  }

  useEffect(() => {
    SplashScreen.hide();
    getData();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={email == "Abdul" ? 'Display Details' : 'LoginScreen'} >
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='Display Details' component={Displaycredentials} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
