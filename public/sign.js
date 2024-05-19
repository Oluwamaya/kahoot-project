
  // Import the functions you need from the SDKs you need

  const firebaseConfig = {
    apiKey: "AIzaSyAO2aEfhbla0c7_Z7XzP-mQMyof3dZWfrM",
    authDomain: "ktdbad.firebaseapp.com",
    projectId: "ktdbad",
    storageBucket: "ktdbad.appspot.com",
    messagingSenderId: "772957424943",
    appId: "1:772957424943:web:a733a7d5fa49c8a66725da"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  // const db = firebase.firestore();
  

  let firstname = document.getElementById("firstname")
  let lastname = document.getElementById("lastname")
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let cpassword = document.getElementById("cpassword")

  function sub(ev){
   ev.preventDefault()
   

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
       
    //   const user = firebase.auth().currentUser;
    if (user) {
        alert("signup Successful ")
        firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          alert("verification sent")
          // ...
        }); 
        window.location.href ="login.html"
    }

user.updateProfile({
  displayName: "lastname.value",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Update successful
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});  
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("error siging up")
    });

  }