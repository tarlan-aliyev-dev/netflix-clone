// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdWNP0Uq279nSekk1Zk-yH4a0o9rGX3tI",
  authDomain: "netflix-clone-2bcd4.firebaseapp.com",
  projectId: "netflix-clone-2bcd4",
  storageBucket: "netflix-clone-2bcd4.appspot.com",
  messagingSenderId: "182798188229",
  appId: "1:182798188229:web:c20f8e22ac92553ae6baac"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
