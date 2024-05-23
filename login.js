
  // Import the functions you need from the SDKs you nee
  const firebaseConfig = {
    apiKey: "AIzaSyBJ_h9TsGI6JwLblFqAigR49graD38ml2c",
    authDomain: "quizhopper-e3676.firebaseapp.com",
    projectId: "quizhopper-e3676",
    storageBucket: "quizhopper-e3676.appspot.com",
    messagingSenderId: "560112687629",
    appId: "1:560112687629:web:ff719a6dd2e08c67a25344",
    measurementId: "G-VVT6PLZWV2"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();
  var provider = new firebase.auth.FacebookAuthProvider();


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
        alert("Login Successful")
        window.location.href = "create.html"
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Email & Password did not match")
    });
}
function goog(ev){
  ev.preventDefault()
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
    if(user){
      alert("Signup successful")
      window.location.href = "create.html"
  }
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    alert("Error login")
  });
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















