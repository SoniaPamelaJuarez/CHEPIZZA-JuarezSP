// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWNNMg3zQt0jhQszLW_5zJVMhfVAb9KIA",
    authDomain: "che-pizza-backend.firebaseapp.com",
    projectId: "che-pizza-backend",
    storageBucket: "che-pizza-backend.appspot.com",
    messagingSenderId: "1091699428378",
    appId: "1:1091699428378:web:22d6d9ebd264b5214155a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);