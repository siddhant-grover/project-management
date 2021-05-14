import firebase from 'firebase/app' //importing just the base features of firebase lib
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDVLyqftaM6kgrk5bd7GNCiUc8yzq9M23I", //apiKey ,so our project can identify which firebase project on the backend to connect to , dont worry that its visible on front end 
    authDomain: "project-manager-c42b1.firebaseapp.com",
    projectId: "project-manager-c42b1",
    storageBucket: "project-manager-c42b1.appspot.com",
    messagingSenderId: "47025050390",
    appId: "1:47025050390:web:9b3cb6c58d3bdc73da7637",
    measurementId: "G-FR37M2EGS8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);//react project connect to our firebase project 
  firebase.firestore().settings({timestampsInSnapshots:true}) // just an update , how database works with timestamps
 
  export default firebase; //inside all the places of our project we can import this and use this to ineract with our firebase project 
  