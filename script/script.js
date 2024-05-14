// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8KN-YOfyn5Zi7FocsnXOkLwA2dTMPr68",
    authDomain: "fir-2d245.firebaseapp.com",
    projectId: "fir-2d245",
    storageBucket: "fir-2d245.appspot.com",
    messagingSenderId: "10074106758",
    appId: "1:10074106758:web:ebede7eecc306f5033da07",
    measurementId: "G-CSM66L5CC7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'it';





let googleBtn = document.getElementById("googleBtn");




// let loginBtn = document.getElementById("login");


googleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            alert(result)
            window.location.href = "../student.html"
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            alert(error)
        });
})

// let student = "student.@gmail.com";
// let studentPassword = 1111;
// let teacher = "teacher.@gmail.com";

// let gmail = document.getElementById("gmail").value;
// let password = document.getElementById("password").value;


// if(gmail == student && password == studentPassword) {
//     window.location.href = "../student.html"
// }else {
//     window.location.href = "../teacher.html"

// }

