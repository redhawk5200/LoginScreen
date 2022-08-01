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

export const Displaycredentials = ({route, navigation}) =>{

    const {myEmail} = route.params;

    return(
        <View style={styles.Displaycredentialscontainer}>
            <Text style={styles.Displaycredentialstext}>Welcome User! Your email address is: {myEmail}</Text>
            <Button title='Go Back' onPress={()=>navigation.goBack()}/>
        </View>
    );
};