import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBP5gtgziEkjv5cbbw_cFe1ptfytsVqrr4",
    authDomain: "newsletter-d43c3.firebaseapp.com",
    databaseURL: "https://newsletter-d43c3-default-rtdb.firebaseio.com",
    projectId: "newsletter-d43c3",
    storageBucket: "newsletter-d43c3.appspot.com",
    messagingSenderId: "207958643284",
    appId: "1:207958643284:web:f1463eca56d19143e913c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()