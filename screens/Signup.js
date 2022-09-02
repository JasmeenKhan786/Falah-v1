import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/Feather";

import { AntDesign } from "@expo/vector-icons";
import db from "../config";
import firebase from "firebase";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pwd: "",
      confirmpwd: "",
      secureTextEntryPwd: true,
      secureTextEntryConfirmPwd: true,
    };
  }
  signup = (email, pwd) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then((response) => {
        Alert.alert("Alhamdullilah!");
        var user = response.user;

        db.collection("profiles").add({
          email: email,
          name: "",
          account: "",
          address: "",
          image:
            "https://i.picsum.photos/id/683/200/300.jpg?hmac=LalV5DeTpQsFRVpqJKk0lZ_zRqag95TYBrqTW06L9yw",
        });

        alert('Please complete your Profile before proceeding!')
        this.props.navigation.navigate("Home");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  changeSecureTextPwd = () => {
    this.setState({ secureTextEntryPwd: !this.state.secureTextEntryPwd });
  };
  changeSecureTextConfirmPwd = () => {
    this.setState({
      secureTextEntryConfirmPwd: !this.state.secureTextEntryConfirmPwd,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1, width: "100%", height: "100%" }}
          source={require("../assets/bg2.png")}
        >
          <View style={{ marginLeft: "10%", marginTop: "30%" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Create Account
            </Text>
            <Text style={{ fontSize: 18 }}>
              Let's Take a Step Towards Allah
            </Text>
          </View>

          <View
            style={{
              borderRadius: 10,
              width: "80%",
              height: 40,
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#ddd",
              justifyContent: "space-around",
              flexDirection: "row",
              marginTop: "20%",
              padding: 7,
            }}
          >
            <AntDesign name="mail" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 20, width: "90%", height: 35 }}
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: "#ddd",
              borderRadius: 10,
              width: "80%",
              height: 40,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              marginTop: 30,
              padding: 7,
            }}
          >
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 20, width: "80%", height: 40 }}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={this.state.secureTextEntryPwd}
              onChangeText={(val) => {
                this.setState({ pwd: val });
              }}
            />

            <TouchableOpacity onPress={this.changeSecureTextPwd}>
              {this.state.secureTextEntryPwd ? (
                <Icon name="eye-off" size={24} color="black" />
              ) : (
                <Icon name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#ddd",
              borderRadius: 10,
              width: "80%",
              height: 40,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              marginTop: 30,
              padding: 7,
            }}
          >
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              style={{ paddingLeft: 20, width: "80%", height: 40 }}
              placeholder="Confirm Password"
              placeholderTextColor="black"
              secureTextEntry={this.state.secureTextEntryConfirmPwd}
              onChangeText={(val) => {
                this.setState({ confirmpwd: val });
              }}
            />
            <TouchableOpacity onPress={this.changeSecureTextConfirmPwd}>
              {this.state.secureTextEntryConfirmPwd ? (
                <Icon name="eye-off" size={24} color="black" />
              ) : (
                <Icon name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 40,
              borderColor: "#1B5E61",
              borderWidth: 1,
              backgroundColor: "#1B5E61",
              borderRadius: 20,
              width: "50%",
              height: 40,

              padding: 6,
            }}
            onPress={() => {
              if (
                this.state.email &&
                this.state.pwd &&
                this.state.confirmpwd &&
                this.state.pwd === this.state.confirmpwd
              ) {
                this.signup(this.state.email, this.state.pwd);
              } else {
                alert("Passwords don't match!");
              }
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>SIGN UP</Text>
          </TouchableOpacity>

          <Text
            style={{
              bottom: 40,
              position: "absolute",
              textAlign: "center",
              alignSelf: "center",
              color:'white',
              fontSize:18
            }}
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            Already have an account?
            <Text style={{ color: "white" , fontSize:18, fontWeight:'bold'}}> Sign In </Text>
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 80,
    paddingTop: 36,
    paddingHorizontal: 20,
    backgroundColor: "#ED3D9F",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});
