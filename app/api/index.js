import firebaseService from '../enviroments/firebase';

const FIREBASE_REF_SERVICES = firebaseService.database().ref('Configuration/services');
const FIREBASE_REF_USERS = firebaseService.database().ref('Users');

export const sendPushNotification = payload =>
  FIREBASE_REF_SERVICES.child('push').on('value', snapshot => {
    fetch(snapshot.val(), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...payload
      })
    }).catch(err => console.log('Fetch error :', err));
  });

export const setOnlineStatus = ({ id, status }) => {
  FIREBASE_REF_USERS.child(id).update({
    isOnline: status
  });
};
