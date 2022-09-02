import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground
} from "react-native";
import firebase from "firebase";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  } 
  render() {
    return (
      <View style={{ flex: 1 }}>
         <ImageBackground
          style={{ flex: 1, width: '100%', height: '100%' }}
          source={require('../assets/bg2.png')}>
        <View
          style={{
            marginTop: 36,
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#1B5E61" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#1B5E61",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Reset Password
          </Text>
          <AntDesign name="user" size={0} color="black" />
        </View>


        <TextInput
          style={{
            padding: 10,
            width: "80%",
            height: 40,
            borderRadius: 6,
            alignSelf:'center',
            marginTop:'30%',
            backgroundColor: '#ddd',
          }}
          placeholderTextColor="black"
          placeholder="Enter Email"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        />
        <Text style={{textAlign:'center', width:'85%', alignSelf:'center'}}> * Please Enter the Email which is already registered with us</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#1B5E61",
            width: "50%",
            height: 30,
            padding: 5,
            borderRadius: 5,
            alignSelf:'center',
            marginTop:'10%'
          }}
          onPress={() => {
            if(this.state.email){
            firebase.auth().sendPasswordResetEmail(this.state.email);
            Alert.alert("Password reset email sent!!");
            this.props.navigation.navigate('Login')
            }
            else{
              alert('Please Enter a Valid Email!')
            }
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Send Reset Email
          </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
