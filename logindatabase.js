// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkOV3nzRvmBNpdf7lPa2yl4_gyOAw3sX8",
  authDomain: "shecare-ca52d.firebaseapp.com",
  projectId: "shecare-ca52d",
  storageBucket: "shecare-ca52d.firebasestorage.app",
  messagingSenderId: "98612773537",
  appId: "1:98612773537:web:234bf17de1ded9ff4126e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//submit button

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href = "home.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
