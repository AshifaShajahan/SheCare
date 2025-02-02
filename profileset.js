// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA16IZjV68v7xrC7HNi8ElhkG6B6eOujCc",
  authDomain: "shecare-profile.firebaseapp.com",
  projectId: "shecare-profile",
  storageBucket: "shecare-profile.firebasestorage.app",
  messagingSenderId: "1093277262832",
  appId: "1:1093277262832:web:e52a8bcaec298c8635b335",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get user input values
    
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const cycleStart = document.getElementById("cycle-start").value;
    const cycleDuration = document.getElementById("cycle-duration").value;
    const isIrregular = document.querySelector(
      'input[name="irregular"]:checked'
    ).value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Firebase Authentication - Create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User Created:", user);

        // Save User Details in Firestore Database
        return db.collection("users").doc(user.uid).set({
          uid: user.uid,
          name: name,
          age: age,
          cycleStart: cycleStart,
          cycleDuration: cycleDuration,
          isIrregular: isIrregular,
          email: email,
        });
      })
      .then(() => {
        alert("Signup Successful! Redirecting to login...");
        window.location.href = "/login.html"; // Redirect to login page
      })
      .catch((error) => {
        alert(error.message);
        console.error("Error:", error);
      });
  });
