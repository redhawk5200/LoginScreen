import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D1512D',
      flex: 1,
    },
    login: {
      width: '90%',
      height: '60%',
      backgroundColor: '#F5E8E4',
      borderWidth: 5,
      borderRadius: 20,
      borderColor: '#F5C7A9',
      marginBottom: 60,
    },
    textinputs: {
      borderWidth: 1,
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      borderColor: '#D1512D',
      color: 'black',
      paddingLeft: 10,
    },
    text:{
      color: 'black',
      fontFamily:"regular",
      paddingLeft: 10,
      paddingTop:  5,
      fontSize: 30,
      fontWeight: 'bold',
    },
    labels: {
      color: 'black',
      fontFamily:"regular",
      paddingLeft: 10,
      paddingTop:  5,
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: 30,
    },
    forgotpassword: {
      color: 'black',
      fontFamily:"regular",
      paddingTop: 15,
      paddingBottom: 30,
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'right',
      paddingRight: 10,
    },
    button: {
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#3CCF4E',
      marginTop: 5,
      width: '30%',
      height: '8%',
      marginLeft: 115,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3CCF4E',
    },
    buttontext: {
      color: 'black',
      fontFamily:"Sans-serif",
      fontSize: 20,
    },
    Displaycredentialscontainer:{
      justifyContent: 'center',
      flex: 1,
      textAlign: 'center',
    },
    Displaycredentialstext:{
      color: 'black',
      fontSize: 30,
    },
    Displaycredentialsgobackbutton:{
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#3CCF4E',
      marginTop: 30,
      width: '30%',
      height: '6%',
      marginLeft: 115,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3CCF4E',
    },
    Displaycredentialsupdatebutton:{
      borderWidth: 1,
      borderRadius: 20,
      borderColor: 'red',
      marginTop: 30,
      width: '30%',
      height: '6%',
      marginLeft: 115,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
  });