import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import Loading from '../screens/Loading';
import Profile from '../screens/Profile';
import AboutUs from '../screens/AboutUs';
import Home from '../screens/Home';
import AllNotes from '../screens/AllNotes';
import MyNotes from '../screens/MyNotes';
import AllNotesDetails from '../screens/AllNotesDetails';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const NotesStack = createStackNavigator({
  AllNotes: { screen: AllNotes, navigationOptions: { headerShown: false } },
  AllNotesDetails: {
    screen: AllNotesDetails,
    navigationOptions: { headerShown: false },
  },
});
const HomeSwitch = createSwitchNavigator({
  Home:{screen:Home},
  AboutUs:{screen:AboutUs}
})
const Tab = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeSwitch },
    AllNotes: { screen: NotesStack },
    MyNotes: { screen: MyNotes },
    Profile: { screen: Profile },
  },
  {
    initialRouteName: 'Home',
    activeColor: 'black',
    inactiveColor: '#1B5E61',
    barStyle: {
      backgroundColor: '#DDE7ED',
      borderRadius: 20,
      overflow: 'hidden',
      width: '90%',
      height: 50,
      alignSelf: 'center',
      marginVertical: 20,
    },
    labeled: false,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === 'Home') {
          return (
            <Ionicons
              name="home-sharp"
              size={24}
              color={focused ? 'black' : '#1B5E61'}
            />
          );
        } else if (routeName === 'Profile') {
          return (
            <Feather
              name="user"
              size={24}
              color={focused ? 'black' : '#1B5E61'}
            />
          );
        } else if (routeName === 'AllNotes') {
          return (
            <MaterialCommunityIcons
              name="notebook-multiple"
              size={24}
              color={focused ? 'black' : '#1B5E61'}
            />
          );
        } else if (routeName === 'MyNotes') {
          return (
            <Foundation
              name="clipboard-notes"
              size={24}
              color={focused ? 'black' : '#1B5E61'}
            /> 
          );
        }
      },
    }),
  }
);

const TabNavigator = createSwitchNavigator({
  Loading: { screen: Loading },
  Login: { screen: Login },
  Signup: { screen: Signup },
  ForgotPassword: { screen: ForgotPassword },
  Tab: { screen: Tab },
});

export default createAppContainer(TabNavigator);
