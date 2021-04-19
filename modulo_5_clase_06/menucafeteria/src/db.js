import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBsaFSSmm5iHqF__d9Az9aUq7W6nS1aw9U",
    authDomain: "menucafeteria159v1.firebaseapp.com",
    projectId: "menucafeteria159v1",
    storageBucket: "menucafeteria159v1.appspot.com",
    messagingSenderId: "158606407881",
    appId: "1:158606407881:web:c0d27b05b994b11c3cf518"
};

export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

db.settings({ timestampsInSnapshots: true })