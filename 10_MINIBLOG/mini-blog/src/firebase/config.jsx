import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1X67C7ATzm3JkPD7XG8w5ow8G9e69m6o",
    authDomain: "miniblog-8035a.firebaseapp.com",
    projectId: "miniblog-8035a",
    storageBucket: "miniblog-8035a.appspot.com",
    messagingSenderId: "724234270798",
    appId: "1:724234270798:web:844204a9e4a45b12c36b1f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };