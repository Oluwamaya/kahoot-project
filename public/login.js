


  // Your web app's Firebase configuration
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
  

  // Initialize Firebase  
  var provider = new firebase.auth.GoogleAuthProvider();

  


  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let yam = document.getElementById("eye")
  let plus = document.getElementById("plus")
  yam.style.display = "none"
  plus.style.display ="block"
  function eye(ev){
     ev.preventDefault()
    if (password.type == "password") {
         password.type = "text"
    } else {
     password.type = "password"
    }   
  }
  function up(){
     window.location.href = "sign.html"
  }

function login(ev){
  ev.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    alert("Login successfull")
    var user = userCredential.user;
    console.log(user)
    window.location.href="create.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Invalid login page")
    window.onload()
  });
}
function goog(ev){
  
}
function face(ev){
  ev.preventDefault()

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
        if(user){
                alert("Signup successful")
                window.location.href = "create.html"
        }

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    alert("Error login")

    // ...
  });
}
function forget(ev){
  ev.preventDefault()
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("Password reset email sent!")
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}















