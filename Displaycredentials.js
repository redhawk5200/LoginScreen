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


    function backButtonHandler(){
        if(navigation && navigation.goBack()){
            navigation.goBack(null);
            return true;
        }
        return false;
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

    return(
        <View style={styles.Displaycredentialscontainer}>
            <Text style={styles.Displaycredentialstext}>Welcome User! Your email address is: {email}</Text>
            <TouchableOpacity style={styles.Displaycredentialsgobackbutton} onPress={()=>navigation.goBack()}><Text>Back to login page</Text></TouchableOpacity>
            {/*<TouchableOpacity style={styles.Displaycredentialsupdatebutton} onPress={()=>navigation.goBack()}><Text>Update Details</Text></TouchableOpacity>*/}
        </View>
    );
};