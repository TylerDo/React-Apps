import firebase from 'firebase';

//  Web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAkweqrDqERlftLUdepPKaocnuUeOHTx9c",
    authDomain: "login-cba2d.firebaseapp.com",
    projectId: "login-cba2d",
    storageBucket: "login-cba2d.appspot.com",
    messagingSenderId: "468225970477",
    appId: "1:468225970477:web:ffefda91b5e28acbb743a4"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;