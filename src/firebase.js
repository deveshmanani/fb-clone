import firebase from 'firebase'

const firebaseConfig = {
    //Insert your firebase config here !!!!!!
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db