//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {Text,View,TouchableOpacity,Alert} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackHandler } from 'react-native';

export const Displaycredentials = ({route, navigation}) =>{

    const [email, setEmail] = useState('');

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
    
        return () => {
          BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
        };
      }, [backButtonHandler]);


    const backButtonHandler=()=>{
        BackHandler.exitApp()
        return true;
    }


    useEffect(()=>{
        getData();
    }, [])


    const getData = () =>{
        try {
            AsyncStorage.getItem('email').then(value=>{
                if(value == 'Abdul'){
                    setEmail(value);
                }
            })
        } catch (error) {
            Alert.alert(error);
        }
    }

    const logout=async() =>{
            try{
                await AsyncStorage.setItem('email','');
                await AsyncStorage.setItem('password','');
                navigation.goBack();
            } catch (error) {
                Alert.alert("Error");
            }
        }
    

    return(
        <View style={styles.Displaycredentialscontainer}>
            <Text style={styles.Displaycredentialstext}>Welcome User! Your email address is: {email}</Text>
            <TouchableOpacity style={styles.Displaycredentialsgobackbutton} onPress={()=>navigation.goBack()}><Text>Back to login page</Text></TouchableOpacity>
            <TouchableOpacity style={styles.Displaycredentialsupdatebutton} onPress={()=>logout()}><Text>Logout</Text></TouchableOpacity>
        </View>
    );
};