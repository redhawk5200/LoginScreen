//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Loginscreen1';
import { Displaycredentials } from './Displaycredentials';


export default function App(){
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name='LoginScreen' component={Login}/>
        <Stack.Screen name='Display Details' component={Displaycredentials}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
