// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ0Xw4ME1RT0MlH6aBug80UZvww6TjKMQ",
    authDomain: "assigment-12-12cd5.firebaseapp.com",
    projectId: "assigment-12-12cd5",
    storageBucket: "assigment-12-12cd5.appspot.com",
    messagingSenderId: "623355767819",
    appId: "1:623355767819:web:cf3a2f3da0bf1c9d192b0e"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth