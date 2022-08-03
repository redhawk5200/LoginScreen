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
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Displaycredentials = ({route, navigation}) =>{

    const [email, setEmail] = useState('');

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
            <TouchableOpacity style={styles.Displaycredentialsgobackbutton} onPress={()=>navigation.goBack()}><Text>Go Back</Text></TouchableOpacity>
            {/*<TouchableOpacity style={styles.Displaycredentialsupdatebutton} onPress={()=>navigation.goBack()}><Text>Update Details</Text></TouchableOpacity>*/}
        </View>
    );
};