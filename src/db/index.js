import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAKGsyYDwIFAAFlqu8aEMIlvsaEhn6lo5I',
  authDomain: 'vue-firestore-tutorial-93586.firebaseapp.com',
  databaseURL: 'https://vue-firestore-tutorial-93586.firebaseio.com',
  projectId: 'vue-firestore-tutorial-93586',
  storageBucket: 'vue-firestore-tutorial-93586.appspot.com',
  messagingSenderId: '1087709130014'
}

const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()