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
  const db = firebase.firestore();
  
  
  
  
  let displayquestion = document.getElementById("display-question")
  let option1 = document.getElementById("option-one-label")
  let option2 = document.getElementById("option-two-label")
  let option3 = document.getElementById("option-three-label")
  let option4 = document.getElementById("option-four-label")
  let disQues = document.getElementById("disQues")
  let time = document.getElementById("time")
  let displayNum = document.getElementById("question-number")
  let disLength = document.getElementById("length")
  let showUsername = document.getElementById("user")
  let main = document.getElementById("maint")
  let kojo = document.getElementById("kojo")
  let input = document.getElementById("mang")
  let spinner = document.getElementById("spinner")
  
  main.style.display = "none"
  // let seconds = document.getElementById("seconds")

  
let knot = document.querySelector(".game-quiz-container");
let currentindex = 0;
let pickedAns = [];
let score = 0;
let quizz = [];
let currentopt;
let currentAns;
let queLength;
let quiz;
let interval = null;
let seconds = 15;

kojo.style.display = "none"



let meu = JSON.parse(localStorage.getItem("pin"))
console.log(meu);
async function getQue() {

  await db.collection("just").where("LA", "==", meu)
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
getQue();

db.collection("just").get().then((querySnapshot) => {
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    let maya = doc.data().mygamepin
    if (maya) {

      quiz = maya.find((quiz) => quiz.gamePin === meu);
      quizz.push(quiz)
    }
  })
});

setTimeout(() => {
  main.style.display = "block"
  spinner.style.display = "none"

  showQue()
},4000);

function showQue() {

  if (quiz) {
    // console.log("Found quiz:", quiz);
    disLength.innerHTML = quiz.questions.length;
    displayNum.innerHTML = `${currentindex + 1}`;
    // quiz.questions.forEach(el => {
    //   console.log(el)
    // let nek = el.question 
    // console.log(nek)
    currentAns = quiz.questions[currentindex].correctOption
    disQues.innerHTML = `<div>${quiz.questions[currentindex].question}</div>`
    opt.innerHTML = ""
    currentopt = quiz.questions[currentindex].options
    for (let i = 0; i < currentopt.length; i++) {
      const element = currentopt[i];
      // console.log(element);
      opt.innerHTML += `
                  <div class="mot bg-primary rounded-1 py-2 px-2 fs-3  my-2">
                          <span id="boss">
                        <label class="kill w-100 fw-bold text-white">${currentopt[i]}
                        <input onchange="pickAns(event, ${i})" id="mang" value="${currentopt[i]}" name="maya" type="radio"/>
                        </label>
                        </span>
                      </div>
                `;

    }
  }
  count()
}







function pickAns(ev, i) {
  console.log(i);
  const optionInputs = document.querySelectorAll('input[name="maya"]');

  for (const optionInput of optionInputs) {
    optionInput.disabled = true;
  }
  let selected = ev.target.value;
  console.log(selected)
  console.log(currentAns)

  // currentAns.style.backgroundColor ="gold"

  // console.log(ev.parentElement[i]);
  // console.log(currentopt);
  if (currentAns === selected) {

    score += 100
    console.log(score)


  }
  else if (currentAns !== selected) {
    // selected.style.backgroundColor = "red"
  }
  else {
    alert("wrong")
  }
}

// });
let username;
let recieve
showlb();

function showlb() {

  db.collection("post").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      const data = doc.data();
      username = data.username;
      recieve = data.score

      if (username) {
        // Increment the userCount and display it with the username
        // userCount++;
        showUsername.innerHTML += `<div  class="  justify-content-between align-items-center pt-2 px-2 mx-auto bg-white rounded-4" style="width: 90%; display:flex; "> 
                  <p class="h5 fw-bold"> ${username}</p>
                  <p class="fs-3 fw-bold"> ${recieve}</p>
              </div>
              <br>`;
      } else {
        // Handle the case where "username" is missing or empty
        console.log("Username is missing or empty:", username);
      }
    });
  });
}
// setInterval(function man() {


// },8000)
// console.log(red)





  // console.log(quizz)


//   kojo.style.display = "none"
//   main.style.display = "block"

//   quizz.forEach(el => {
//     queLength = el.questions.length

//   })

//   if (currentindex < queLength) {
//     currentindex++



//     console.log("more")
//   }
//   else {
//     console.log("end")

//   }

async function fetchQue(){
    var docRef = db.collection("just").doc("LA");
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            if(doc.data().hasStarted == true){
                clearInterval(checker)
               currentindex++
               
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

let checker = setInterval(()=>{
    fetchQue()
},700)
  showQue()




function count() {
 
  const tete = () => {
    time.innerHTML = seconds
    time.innerHTML = (seconds < 10 ? "0" : " ") + seconds;

    if (seconds < 10) {
      time.style.color = "red";
    }

    if (seconds <=  0) {
      seconds = 15
      kojo.style.display = "block";
      main.style.display = "none";
      // showQue();
      // net()
      clearInterval(interval);
    }

    seconds--;
  }
  interval = setInterval(tete, 4000);
}
