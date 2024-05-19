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



let quizzes = [
  {
    gamePin: "151030",
    hasStarted: false,
    questions: [
      {
        question: "Which country has the longest coastline in the world?",
        option: ["USA", "Canada", "Ghana", "Nigeria"],
        correctOption: "Canada"
      },
      {
        question: "What is the capital of Malta?",
        option: ["London", "Korea", "Mayadiram", "Valetta"],
        correctOption: "Valetta"
      },
      {
        question: "In which US state would you find Harvard University?",
        option: ["Arizona", "Texas", "Califonia", "Massachusetts"],
        correctOption: "Massachusetts"
      },
      {
        question: "Which three countries does Mexico share a land border with?",
        option: ["Japan,Italy and USA", "USA, Belize and Guatemala", "Nigeria, England and Guatemala", "Belgium,USA and Spain"],
        correctOption: "USA, Belize and Guatemala"
      },
      {
        question: "Astana is the capital city of which country?",
        option: ["Tokyo", "Peru", "Tennesee", "Kazakhstan"],
        correctOption: "Kazakhstan"
      },
      {
        question: "What is the biggest island in the world?",
        option: ["lagos Island", "Greenland", "Germany", "Brussell"],
        correctOption: "Greenland"
      },
      {
        question: "What is the capital of Estonia?",
        option: ["Morroco", "Tallinn", "Andonna", "Angola"],
        correctOption: "Tallinn"
      },
      {
        question: "Which city currently has the highest population in the world?",
        option: ["Spain", "Tokyo", "Peru", "Nigeria"],
        correctOption: "Tokyo"
      },
      {
        question: "How many large islands make up Hawaii?",
        option: ["Three", "Two", "Four", "Eight"],
        correctOption: "Eight"
      },
      {
        question: "What is the name of the microstate located between Spain and France?",
        option: ["Andorra", "Chicago", "Lima", "Ottawo"],
        correctOption: "Andorra"
      },
      {
        question: "What is the highest peak in Africa?",
        option: ["Mount Benjamin", "Oke Olumo", "Mount Kilimanjaro", "Mount Everest"],
        correctOption: "Mount Kilimanjaro"
      },
      {
        question: "Which country has the most pyramids in the world?",
        option: ["Sudan", "China", "Qatar", "India"],
        correctOption: "Sudan"
      },
      {
        question: "In which US state would you find Fort Knox?",
        option: ["Kentucky", "nairobi", "Phoenix", "Buffalo"],
        correctOption: "Kentucky"
      },
      {
        question: "Mount Vesuvius casts a shadow over which modern Italian city?",
        option: ["Bangladash", "Bugat", "Kendozi", "Naples"],
        correctOption: "Naples"
      },
      {
        question: "What is the largest desert in the world?",
        option: ["Kentra", "elect", "Ikorodu", "Antarctica"],
        correctOption: "Antarctica"
      },
      {
        question: "Which London Underground line is represented as green on the tube map?",
        option: ["Sctrach", "Station", "The District Line", "Brussels"],
        correctOption: "The District Line"
      },
      {
        question: "On the London Tube network, which is the only station to begin with the letter 'I'?",
        option: ["Ickenham", "Katkhanan", "Ijakumo", "Ukrania"],
        correctOption: "Ickenham",
      },
      {
        question: "In which European city would you find Manneken Pis – a statue of a small boy urinating into a fountain?",
        option: ["Spain", "TokBrussels", "Brussels", "Mercury"],
        correctOption: "Brussels"
      },
      {
        question: "In which city would you find La Sagrada Familia?",
        option: ["Barcelona", "Villareal", "Germany", "Real Madrid"],
        correctOption: "Barcelona"
      },
      {
        question: "What is the highest mountain in Britain?",
        option: ["Kent", "Colchester", "The Seine", "Ben Nevis"],
        correctOption: "Ben Nevis"
      },

    ],

  },

  {
    gamePin: "202030",
    hasStarted: false,
    questions: [
      {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["John Steinbeck", "J.D. Salinger", "Harper Lee", "F. Scott Fitzgerald"],
        correctOption: "Harper Lee"
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Sv", "Ag", "Si", "Au"],
        correctOption: "Ag"
      },
      {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctOption: "Carbon Dioxide"
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        correctOption: "Paris"
      },
      {
        question: "How many teeth does an adult human have?",
        options: ["28", "30", "32", "36"],
        correctOption: "32"
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Skin", "Liver"],
        correctOption: "Skin"
      },
      {
        question: "Which gas do plants release into the atmosphere during respiration?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctOption: "Carbon Dioxide"
      },
      {
        question: "Who is the author of 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "George Orwell"],
        correctOption: "F. Scott Fitzgerald"
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Gobi Desert", "Atacama Desert", "Arctic Desert"],
        correctOption: "Sahara Desert"
      },
      {
        question: "In which country is the Taj Mahal located?",
        options: ["India", "Egypt", "Turkey", "China"],
        correctOption: "India"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctOption: "Au"
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctOption: "Jupiter"
      },
      {
        question: "Which gas is responsible for the green color of leaves?",
        options: ["Oxygen", "Carbon Dioxide", "Chlorophyll", "Nitrogen"],
        correctOption: "Chlorophyll"
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Bronte", "Jane Austen", "Charlotte Bronte", "Leo Tolstoy"],
        correctOption: "Jane Austen"
      }
    ],
  },
  {
    gamePin: "199033",
    hasStarted: false,
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        correctOption: "Paris"
      },
      {
        question: "Who is the current President of the United States?",
        options: ["Barack Obama", "Joe Biden", "Donald Trump", "George W. Bush"],
        correctOption: "Joe Biden"
      },
      {
        question: "Which country recently won the UEFA European Championship in football (Euro 2020)?",
        options: ["France", "Germany", "Portugal", "Italy"],
        correctOption: "Italy"
      },
      {
        question: "What is the largest social media platform in the world?",
        options: ["Twitter", "Instagram", "Facebook", "Snapchat"],
        correctOption: "Facebook"
      },
      {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["United States", "China", "Brazil", "Japan"],
        correctOption: "Japan"
      },
      {
        question: "Who won the Nobel Prize in Physics in 2020 for their work on black holes?",
        options: ["Albert Einstein", "Stephen Hawking", "Roger Penrose", "Isaac Newton"],
        correctOption: "Roger Penrose"
      },
      {
        question: "Which company became the world's most valuable publicly traded company in 2021?",
        options: ["Apple", "Amazon", "Microsoft", "Google"],
        correctOption: "Apple"
      },
      {
        question: "In 2021, which spacecraft successfully landed on Mars and began exploring the planet?",
        options: ["Voyager 1", "Hubble Space Telescope", "Mars Rover Perseverance", "New Horizons"],
        correctOption: "Mars Rover Perseverance"
      },
      {
        question: "Which country launched the first-ever crewed mission to the International Space Station (ISS) in 2020?",
        options: ["Russia", "United States", "China", "India"],
        correctOption: "China"
      },
      {
        question: "In 2021, which cryptocurrency gained widespread attention and reached record-high prices?",
        options: ["Ethereum", "Ripple (XRP)", "Litecoin", "Bitcoin"],
        correctOption: "Bitcoin"
      },
      {
        question: "Who won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Brazil", "Belgium"],
        correctOption: "France"
      },
      {
        question: "Which country recently became the first to launch a digital currency issued by its central bank?",
        options: ["United States", "China", "European Union", "Japan"],
        correctOption: "China"
      },
      {
        question: "In 2021, which global event was postponed to 2021 due to the COVID-19 pandemic?",
        options: ["Summer Olympics", "FIFA World Cup", "UEFA European Championship", "Winter Olympics"],
        correctOption: "Summer Olympics"
      },
      {
        question: "Who is the current Prime Minister of the United Kingdom?",
        options: ["David Cameron", "Theresa May", "Boris Johnson", "Tony Blair"],
        correctOption: "Boris Johnson"
      },
      {
        question: "Which country recently signed the Abraham Accords, normalizing diplomatic relations with Israel?",
        options: ["Saudi Arabia", "Egypt", "United Arab Emirates", "Iran"],
        correctOption: "United Arab Emirates"
      },
      {
        question: "In 2021, which tech billionaire became the world's richest person?",
        options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"],
        correctOption: "Elon Musk"
      },
      {
        question: "Which country experienced a major outbreak of wildfires in 2020, leading to widespread destruction and loss of wildlife?",
        options: ["Australia", "Brazil", "Canada", "Russia"],
        correctOption: "Australia"
      },
      {
        question: "Who is the current Secretary-General of the United Nations?",
        options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Ban Ki-moon"],
        correctOption: "António Guterres"
      },
      {
        question: "Which country recently launched the Chang'e-5 mission, successfully bringing lunar samples back to Earth?",
        options: ["Russia", "United States", "China", "India"],
        correctOption: "China"
      },
      {
        question: "In 2020, which country was the first to approve a COVID-19 vaccine for public use?",
        options: ["United States", "Russia", "China", "United Kingdom"],
        correctOption: "Russia"
      },
      {
        question: "Who won the Nobel Prize in Literature in 2020 for her novel 'The Testaments'?",
        options: ["Haruki Murakami", "Margaret Atwood", "J.K. Rowling", "Salman Rushdie"],
        correctOption: "Margaret Atwood"
      },
      {
        question: "Which social justice movement gained prominence in 2020, advocating for racial equality and justice?",
        options: ["Me Too Movement", "Black Lives Matter", "March for Our Lives", "Climate Strike"],
        correctOption: "Black Lives Matter"
      },
      {
        question: "Which European country faced a debt crisis and financial turmoil in recent years, leading to bailout programs?",
        options: ["Italy", "France", "Greece", "Spain"],
        correctOption: "Greece"
      },
      {
        question: "In 2020, which environmental activist was named TIME magazine's Person of the Year?",
        options: ["Greta Thunberg", "Al Gore", "David Attenborough", "Jane Goodall"],
        correctOption: "Greta Thunberg"
      },
      {
        question: "Which country recently experienced a major earthquake and tsunami, causing widespread destruction?",
        options: ["Indonesia", "Japan", "Mexico", "New Zealand"],
        correctOption: "Indonesia"
      },
      {
        question: "Who is the current Chancellor of Germany?",
        options: ["Angela Merkel", "Gerhard Schröder", "Helmut Kohl", "Olaf Scholz"],
        correctOption: "Olaf Scholz"
      }


    ],
  }
]

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






//I SET THE QUIZZEZ INSIDE FIREBASE FROM HERE 

// db.collection("just").doc("LA").set({
//   mygamepin: quizzes,
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });







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
                  <div class="mot bg-primary col-6 rounded-1 py-2 px-2 fs-3  my-2">
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



function net() {

  // console.log(quizz)
   
  var washingtonRef = db.collection("just").doc("LA");

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      hasStarted: true
  })
  .then(() => {
      console.log("Document successfully updated!");
      db.collection("just").doc("LA")
      .onSnapshot((doc) => {
          console.log("Current data: ", doc.data());
          console.log(doc.data());
          kojo.style.display = "none"
  main.style.display = "block"

  quizz.forEach(el => {
    queLength = el.questions.length

  })

  if (currentindex < queLength) {
    currentindex++

    showQue()


    console.log("more")
  }
  else {
    console.log("end")

  }
      });
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

  

}


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
  interval = setInterval(tete, 1000);
}

// count();

