import * as React from 'react'; 
import {
  Text,
  View,
  StyleSheet,
  TextInput, 
  TouchableOpacity,
} from 'react-native';
 
import TabNavigator from './navigation/navigate' 
export default class App extends React.Component {
  render() {
    return(
      <TabNavigator/>
    )
  }
}
