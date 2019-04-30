import { Component } from 'react';
import { node, shape } from 'prop-types';
import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from 'react-native';
import firebaseService from '../../../enviroments/firebase';

const FIREBASE_REF_USER = firebaseService.database().ref('Users');

class PushNotifications extends Component {
  componentDidMount() {
    PushNotification.configure({
      onRegister: ({ token: deviceToken, os: deviceType }) => {
        FIREBASE_REF_USER.child(this.props.user.uid).update(
          {
            deviceToken,
            deviceType
          },
          error => {
            if (error) throw new Error(`Something was wrong: ${error.message}`);
          }
        );
      },

      onNotification: notification => {
        console.log('NOTIFICATION:', notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      senderID: '398153396241',

      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      popInitialNotification: true,
      requestPermissions: true
    });
  }

  render() {
    return this.props.children;
  }
}

PushNotifications.propTypes = {
  children: node.isRequired,
  user: shape({}).isRequired
};

const mapStateToProps = ({ sessionReducer }) => ({
  user: sessionReducer.user
});

export default connect(
  mapStateToProps,
  null
)(PushNotifications);
