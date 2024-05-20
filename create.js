
 const firebaseConfig = {
apiKey: "AIzaSyDtpT23EPLkTS9kfEf6Aa02Wli2Ehgfpqw",
authDomain: "isammy-k.firebaseapp.com",
projectId: "isammy-k",
storageBucket: "isammy-k.appspot.com",
messagingSenderId: "243915862365",
appId: "1:243915862365:web:e0c543ab2caf0ed241b8b4",
};
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  var storageRef = firebase.storage().ref();
  const db = firebase.firestore();





let display = document.getElementById("display")
let just = document.getElementById("just")
let imgReader = document.getElementById("imgReader")
let none = document.getElementById("none")
let body = document.getElementById("body")
let imgra = document.getElementById("imgra")
let logoo = document.getElementById("logoo")
let saves = document.getElementById("saves")



function create(){
  window.location.href = 'usercreate.html'
}

// none.style.display = "none"
// function edit(){
// none.style.display = "block"

// setTimeout(() => {
//   none.style.display = "none "
// }, 4000);
// }


let pin = localStorage.getItem('userCode');
console.log(pin);

function clearSt() {
 if(pin){

  const firestore = firebase.firestore();
  const collectionRef = firestore.collection(pin); 

  collectionRef.get().then(querySnapshot => {

      const deletePromises = [];
      querySnapshot.forEach(doc => {
          deletePromises.push(doc.ref.delete());
      });

      return Promise.all(deletePromises);
  }).then(() => {

      return collectionRef.delete();
  }).then(() => {
      console.log('Collection successfully deleted.');
  }).catch(error => {
      console.error('Error deleting collection: ', error);
  });

}
localStorage.removeItem('userPin')
localStorage.removeItem('userCode')

}

clearSt();
  
function checkuser(){
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      imgReader.src = user.photoURL
      console.log(user)
      display.innerHTML = `${user.email}`
      
  } else {

      // User is signed out
      // ...
      // window.location.href = "login.html"
  }
  });
}

checkuser()
let selectedFile = null;


function reed(ev) {
  selectedFile = ev.target.files[0]; // Store the selected file in the variable
  let reader = new FileReader();
  reader.addEventListener("load", (e) => {
    console.log(e.target.result);
    imgra.src = e.target.result;
  });
  if (selectedFile) {
    reader.readAsDataURL(selectedFile);
  }
}

function save() {

  if (selectedFile) {
    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + selectedFile.name).put(selectedFile, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
        saves.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Uploading ${Math.floor(progress)  + '%'}`
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }

      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          const user = firebase.auth().currentUser;
          user.updateProfile({
            photoURL: downloadURL
          }).then(() => {
            imgra.src = downloadURL;
            // alert("Upload successful");
            none.style.display = "none";
            saves.innerHTML = `Upload Done`
            saves.disabled = "true"
          }).catch((error) => {
            alert("Something is wrong");
          });
        });
      }
    );
  } else {
    alert("Please select an image before saving changes.");
    saves.innerHTML = `Save changes`
  }
}

function logOut() {
  firebase.auth().signOut().then(() => {
    alert("Hope to see you next time, Bye for Now..Logging Out")
    window.location.href = "login.html"
  }).catch((error) => {
    alert("Error logging out user..Try Again Later")
  });
}

