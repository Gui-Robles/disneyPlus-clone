import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByfBAWodh7i583pTzMbRGy4jDNl5odGg0",
  authDomain: "disneyplus-clone-a32a2.firebaseapp.com",
  projectId: "disneyplus-clone-a32a2",
  storageBucket: "disneyplus-clone-a32a2.appspot.com",
  messagingSenderId: "534076861284",
  appId: "1:534076861284:web:dee13ec1910f2fe2582871",
  measurementId: "G-VCQBF9LMPE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
