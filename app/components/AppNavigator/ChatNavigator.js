import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Messages from '../Chat';
import Users from '../Users';
import { withNavigation } from './utils';

const getNavigationOptions = ({ title }) => ({
  title,
  headerStyle: {
    backgroundColor: '#3bd1b3'
  },
  headerTintColor: 'white'
});

const ModalChatNavigator = createStackNavigator(
  {
    screen: Messages
  },
  {
    headerMode: 'none'
  }
);

const ChatNavigator = createStackNavigator(
  {
    Users: {
      screen: withNavigation(({ navigateTo }) => (
        <Users goToMessage={({ receptorData }) => navigateTo('Messages')(receptorData)} />
      )),
      navigationOptions: getNavigationOptions({ title: 'Users' })
    },
    Messages: {
      screen: ModalChatNavigator,
      navigationOptions: ({ navigation: { state } }) => {
        const {
          params: { name: title }
        } = state;
        return { ...getNavigationOptions({ title }) };
      }
    }
  },
  {
    mode: 'card'
  }
);

export default ChatNavigator;
