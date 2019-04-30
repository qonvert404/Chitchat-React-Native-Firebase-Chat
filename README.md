# Chitchat React Native Firebase Chat

<img src="https://i.ibb.co/QK2TH84/chitchat.png" width="300" height="300">

Simple chat implementation using react-native and firebase database. This is a Work in Progress!

## Getting Started

### Prerequisites

* [Node](https://nodejs.org)
* [Homewbrew](https://brew.sh/)

* After the completion of Homebrew installation, run this command in your terminal (console):
```
 brew install watchman
```

### Installing

1. Clone this repo, `git clone https://github.com/KonstantinSavinov/Chitchat.git `
2. Go to project's root directory, `cd <your project name>`
3. Run `npm install` to install dependencies
4. Run `react-native link`
5. Run the test application:
  * On Android:
    * To run the Android application, use this command: 
    `react-native run-android`
  * On iOS:
    * To run the iOS application, use the following command: 
    `react-native run-ios`
    
#### *Optional 
1. For the Push Notifications on iOS you need to follow this instructions: https://facebook.github.io/react-native/docs/pushnotificationios.html
2. Setup your first [Firebase](http://mariechatfield.com/tutorials/firebase/step1.html) application backend
3. Copy the config from your Firebase account and paste it to 'firebase.js' file that can be found by the path: app/enviroments/firebase.js 

```javascript
const config = {
  apiKey: “<API_KEY>“,
  authDomain: “<PROJECT_ID>.firebaseapp.com”,
  databaseURL: “https://<DATABASE_NAME>.firebaseio.com”,
  projectId: “<PROJECT_ID>“,
  storageBucket: “<BUCKET>.appspot.com”,
  messagingSenderId: “<SENDER_ID>“,
}
```

## Screenshots
|Login Screen|Registration Screen| Profile Screen|
|:--:|:--:|:--:|
|![](https://i.ibb.co/NK6PJPV/Screen-Shot-2019-04-30-at-6-14-50-PM.png)|![](https://i.ibb.co/PtGV90j/Screen-Shot-2019-04-30-at-6-15-45-PM.png)|![](https://i.ibb.co/cLkBNvn/Screen-Shot-2019-04-30-at-6-18-32-PM.png)|

|Users Screen|Chat Screen|Chat Screen # 2
|:--:|:--:|:--:|
|![](https://i.ibb.co/2cL8ktt/Screen-Shot-2019-04-29-at-10-35-16-PM.png)|![](https://i.ibb.co/Jjbqn2P/Screen-Shot-2019-04-30-at-6-21-15-PM.png)|![](https://i.ibb.co/18jFsKJ/Screen-Shot-2019-04-30-at-7-24-14-PM.png)|

