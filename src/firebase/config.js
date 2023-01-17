import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADxyXX4s7XHAW7s_-b3HuSnO9FUFKEMr4",
  authDomain: "vue3-firebase-7ab61.firebaseapp.com",
  projectId: "vue3-firebase-7ab61",
  storageBucket: "vue3-firebase-7ab61.appspot.com",
  messagingSenderId: "391467160236",
  appId: "1:391467160236:web:cc099868fd5d11bbedc509" 
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }