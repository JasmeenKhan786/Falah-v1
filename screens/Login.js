import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
      secureTextEntry: true,
    };
  }
  changeSecureText = () => {
    this.setState({ secureTextEntry: !this.state.secureTextEntry });
  };
  login = (email, pwd) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then((userCredential) => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1, width: '100%', height: '100%' }}
          source={require('../assets/bg2.png')}>
          <View style={{ marginLeft: '10%', marginTop: '20%' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Login</Text>
            <Text style={{ fontSize: 18 }}>Welcome to Falah!</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
              width: '80%',
              height: 40,
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: '30%',
              padding: 7,
              backgroundColor: '#ddd',
              elevation: 50,
              shadowColor: 'black',
            }}>
            <AntDesign name="mail" size={24} color="black" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="black"
              style={{ paddingLeft: 20, width: '90%', height: 40 }}
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <View
            style={{
              
              borderRadius: 10,
              width: '80%',
              height: 40,
              alignSelf: 'center',
              alignItems: 'center',
              padding: 7,
              flexDirection: 'row',
              borderColor: '#ddd',
              backgroundColor: '#ddd',
              marginTop: 30,
            }}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              placeholderTextColor="black"
              style={{ paddingLeft: 20, width: '80%', height: 40 }}
              placeholder="Password"
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={(val) => {
                this.setState({ pwd: val });
              }}
            />
            <TouchableOpacity onPress={this.changeSecureText}>
              {this.state.secureTextEntry ? (
                <Icon name="eye-off" size={24} color="black" />
              ) : (
                <Icon name="eye" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 40,
              borderColor: '#1B5E61',
              borderWidth: 1,
              backgroundColor:'#1B5E61',
              borderRadius: 20,
              width: '50%',
              height: 40,
              padding: 6,
            }}
            onPress={() => {
              if (this.state.email && this.state.pwd) {
                this.login(this.state.email, this.state.pwd);
              } else {
                alert('Please fill all the fields!');
              }
            }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>LOGIN</Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
            }}
            onPress={() => {
              this.props.navigation.navigate('ForgotPassword');
            }}>
            Forgot Password?
          </Text>
          <Text
            style={{
              bottom: 40,
              position: 'absolute',
              textAlign: 'center',
              alignSelf: 'center',
              color: 'white',
              fontSize:18,
            }}
            onPress={() => {
              this.props.navigation.navigate('Signup');
            }}>
            Don't have an account?
            <Text style={{ color: 'white',fontSize:18,fontWeight:'bold' }}> Sign Up </Text>
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
    width: '100%',
    height: 80,
    paddingTop: 36,
    paddingHorizontal: 20,
    backgroundColor: '#ED3D9F',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});
