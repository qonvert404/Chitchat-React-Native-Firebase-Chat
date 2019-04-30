import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { shape } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingInContainer from '../Auth/SingIn/';
import SignUpContainer from '../Auth/SignUp/';
import HomeContainer from '../Home/';
import PushNotifications from '../common/PushNotifications';
import { withNavigation } from './utils';
import ChatNavigator from './ChatNavigator';


const SignedInNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: withNavigation(({ navigateTo }) => <HomeContainer onSignOut={navigateTo('SignIn')} />),
    navigationOptions: {
      tabBarLabel: 'Profile',
      header: null,
      tabBarOptions: {
        labelStyle: { 
          fontSize: 15,
          fontFamily: 'Avenir',
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#138a72',
        showIcon: true,
        style: {
         backgroundColor: '#3bd1b3'
        }
      },
      tabBarIcon: ({ tintColor }) => <Icon name="user" size={30} color={tintColor} />
    }
  },
  MessagesTab: {
    screen: ChatNavigator,
    navigationOptions: {
      tabBarLabel: 'Chats',
      header: null,
      tabBarOptions: {
        labelStyle: { 
          fontSize: 15,
          fontFamily: 'Avenir',
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#138a72',
        showIcon: true,
        style: {
         backgroundColor: '#3bd1b3'
        }
      },
      tabBarIcon: ({ tintColor }) => <Icon name="comments" size={30} color={tintColor} />
    }
  }
});

const SignedOutNavigator = createStackNavigator(
  {
    SignIn: {
      screen: withNavigation(({ navigateTo }) => (
        <SingInContainer onSignUp={navigateTo('SignUp')} onSignedIn={navigateTo('HomeTab')} />
      ))
    },
    SignUp: {
      screen: withNavigation(({ navigateTo }) => <SignUpContainer onSignedIn={navigateTo('HomeTab')} />)
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3bd1b3'
      }
    },
    initialRouteName: 'SignIn'
  }
);

/* eslint-disable react/prop-types */
const SignedInTabNavigator = ({ screenProps, ...otherProps }) => (
  <PushNotifications>
    <SignedInNavigator screenProps={{ ...screenProps }} {...otherProps} />
  </PushNotifications>
);
SignedInTabNavigator.router = SignedInNavigator.router;

const MainNavigator = createSwitchNavigator({
  SignedOut: {
    screen: SignedOutNavigator
  },
  SignedIn: {
    screen: SignedInTabNavigator
  }
});

export default createAppContainer(MainNavigator);
