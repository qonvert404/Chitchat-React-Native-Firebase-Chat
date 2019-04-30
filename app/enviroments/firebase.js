import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

const config = {
  apiKey: "AIzaSyAGIAUUODnbkubwKmSGO2_64NSKQbfMccI",
  authDomain: "chitchat-c8060.firebaseapp.com",
  databaseURL: "https://chitchat-c8060.firebaseio.com",
  projectId: "chitchat-c8060",
  storageBucket: "chitchat-c8060.appspot.com",
  messagingSenderId: "1028515215323"
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
