//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {Text,View,TextInput,TouchableOpacity,Alert} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({navigation}) =>{

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(()=>{
        getData();
    }, )

    const getData = () =>{
        try {
            AsyncStorage.getItem('email').then(value=>{
                if(value == 'Abdul'){
                    navigation.navigate('Display Details')
                }
            })
        } catch (error) {
            Alert.alert(error);
        }
    }

    const submit = async() =>{
        if(email === "Abdul" && password==="Wahab"){
            try {
                await AsyncStorage.setItem('email',email);
                navigation.navigate('Display Details', {myEmail : `${email}`})
            } catch (error) {
                Alert.alert("Error");
            }
        }
        else{
            return Alert.alert("Incorrect credentials")
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.login}>
                <Text style={styles.text}>Login Form</Text>
                <Text style={styles.labels}>Enter your email address here:</Text>
                    <TextInput keyboardType='email-address' autoCapitalize='none' autoCorrect={false} style={styles.textinputs} value={email} onChangeText={(text)=>setemail(text)} ></TextInput>
                <Text style={styles.labels}>Enter your password here:</Text>
                    <TextInput keyboardType='default' autoCapitalize='none' secureTextEntry={true} autoCorrect={false} style={styles.textinputs} value={password} onChangeText={(text)=>setpassword(text)}></TextInput>
                <Text style={styles.forgotpassword}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>submit()}>
                        <Text style={styles.buttontext}>Login</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
};