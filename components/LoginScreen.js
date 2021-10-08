import React from 'react';
import {Text, View, StyleSheet,Image,TextInput,TouchableOpacity,Alert} from 'react-native';
import * as firebase from 'firebase'


export default class LoginScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email : '',
      password:''
    }
  }

login=async(email,password)=>{
  if(email && password){
    try{
      const response = await firebase.auth().signInWithEmailAndPassword(email,password)
      if(response){
        this.props.navigation.navigate('HomeScreen')
      }
    }
    catch(error){
      switch(error.code){
        case 'auth/user-not-found':
        Alert.alert("user doesnt exist")
        console.log("user doesnt exist")
        break

      }
    }
  }
  else{
    Alert.alert('enter email and password')
  }
}




  render(){
    return(
      <View style={{ flex:1}}>
      <Image
      source={require('../assets/login.png')}
      style={{width:200, height:200, marginTop:20, alignSelf:"center"}}
      />

<TextInput style={styles.loginBox}
placeholder="Enter your email"
keyboardType="email-address"
onChangeText={(text)=>{
  this.setState({
    email:text
  })
}}/>



<TextInput style={styles.loginBox}
placeholder="Enter your password"
keyboardType="password"
onChangeText={(text)=>{
  this.setState({
    password:text
  })
}}/>

<TouchableOpacity style={styles.button}>
Login
</TouchableOpacity>

      </View>
    )
  }

}


const styles = StyleSheet.create({
  loginBox:
  {
    width: 300,
  height: 40,
  borderWidth: 1.5,
  fontSize: 20,
  margin:10,
  paddingLeft:10,
  borderRadius:10,
  fontFamily:"cursive"
  },
  button:{
    height:30,
    width:90,
    borderWidth:1,
    marginTop:20,
    paddingTop:5,
    borderRadius:7,
    alignSelf:"center",
    textAlign:"center"
  }
})
