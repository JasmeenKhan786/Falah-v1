import firebase from 'firebase';
require('@firebase/firestore')


const firebaseConfig = {
  apiKey: "AIzaSyA07RTgajA9kSpm2q5zAUaI6dQ8OMoOwcU",
  authDomain: "learnquran-e8926.firebaseapp.com",
  projectId: "learnquran-e8926",
  storageBucket: "learnquran-e8926.appspot.com",
  messagingSenderId: "43438408043",
  appId: "1:43438408043:web:fd3fd25c7ecc9c660ccc2e"
}; 
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig) 
}
export default firebase.firestore();