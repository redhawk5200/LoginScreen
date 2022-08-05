//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';


//here we import the properties like text, buttons etc from react native
import {Alert, View} from 'react-native';

import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'


export const splashinitial = ()=>{
    const getData = async () =>{
        try {
            await AsyncStorage.getItem('email').then(value=>{
              console.log('VALUE:',value)
                if(value == 'Abdul'){
                  navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Display Details'}]
                  }))
                }
                else{
                  navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{name: 'LoginScreen'}]
                  }))
                }
            })
        } catch (error) {
            Alert.alert('Catch body error');
        }
        3547
    }
  
    useEffect(()=> {
      getData();
      SplashScreen.hide();
    }, []);

    return(
        <View>

        </View>
    )
}