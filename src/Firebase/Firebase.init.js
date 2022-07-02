import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzIV7hcNRJ0pJ7OOP4c2eJOg_PBwUNuGM",
  authDomain: "recap-programming-hero.firebaseapp.com",
  projectId: "recap-programming-hero",
  storageBucket: "recap-programming-hero.appspot.com",
  messagingSenderId: "901866556724",
  appId: "1:901866556724:web:cb0d1f2db62fca1e342961",
  measurementId: "G-VYY3TBEDHP"
};

const app = initializeApp(firebaseConfig);
export default app;