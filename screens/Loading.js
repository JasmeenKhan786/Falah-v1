import * as React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import firebase from 'firebase';

export default class Loading extends React.Component {

  checkIfLoggedIn=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate('Home')
      }
      else{
        this.props.navigation.navigate('Login')
      }
    })
  }

  componentDidMount=()=>{
    this.checkIfLoggedIn();
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="green"/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    justifyContent:'center'
  },
});
