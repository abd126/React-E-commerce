import firebase from 'firebase';
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyC7kl68s_d5tl-iNSBz1P7vrhhEHw6aVfE",
    authDomain: "react-ecommerce-e83db.firebaseapp.com",
    projectId: "react-ecommerce-e83db",
    storageBucket: "react-ecommerce-e83db.appspot.com",
    messagingSenderId: "1062355311249",
    appId: "1:1062355311249:web:06be63a2334145d1f93d30",
    measurementId: "G-RNN9G1PMX8"
  };
   firebase.initializeApp(firebaseConfig);

export default firebase;