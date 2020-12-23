import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyC4ldKfjRSLLtu7DmgsBzyXcNx9k5cpee0",
    authDomain: "social-app-4a4b1.firebaseapp.com",
    databaseURL: "https://social-app-4a4b1.firebaseio.com",
    projectId: "social-app-4a4b1",
    storageBucket: "social-app-4a4b1.appspot.com",
    messagingSenderId: "690159408744",
    appId: "1:690159408744:web:6c28ba8a58423d7373cddd"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampInSnapshots : true});
  export default firebase;
