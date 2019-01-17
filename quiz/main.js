let section = document.getElementById("section");
let next = document.getElementById("next");
let questionNum = 0;
let right = 0;
let wrong = 0;
let asked = [];
let score = document.getElementById("score");
let info = true;

//Init
window.onload = function() {
  printQuestion();
};

//Get random between
function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Print new question
function printQuestion() {
  qNum = chooseQuestion();
  questionNum = qNum;
  section.innerHTML = "<h3>" + questions[qNum].question + "</h3>";
  createButtonAndAppend("button", questions[qNum].answer1, section, 1);
  createButtonAndAppend("button", questions[qNum].answer2, section, 2);
  createButtonAndAppend("button", questions[qNum].answer3, section, 3);
  createButtonAndAppend("button", questions[qNum].answer4, section, 4);
}

//Generate new question
function chooseQuestion() {
  //Reset if all questions are asked
  if (asked.length == questions.length) {
    asked = [];
  }
  //Get random question
  let qNum = randBetween(0, questions.length);
  //Make sure the question is not asked before
  if (asked.indexOf(qNum) != -1) {
    return chooseQuestion();
  }
  asked.push(qNum);
  return qNum;
}

//Create new button
function createButtonAndAppend(type, text, parent, onclick) {
  let newElement = document.createElement(type);
  newElement.innerHTML = text;
  newElement.setAttribute("onclick", "chooseAnswer(this," + onclick + ")");
  parent.appendChild(newElement);
}

//Create a new textelement and replace content
function createAndReplace(type, text, parent) {
  parent.innerHTML = "";
  let newTextNode = document.createTextNode(text);
  let newElement = document.createElement(type);
  newElement.appendChild(newTextNode);
  parent.appendChild(newElement);
}

//Choose answer based on user guess
function chooseAnswer(self, answer) {
  //Correct
  if (answer == questions[questionNum].correctAnswer) {
    self.style.background = "#1EBC61"; //Green
    right++;
  } else {
    //Wrong
    self.style.background = "#F75C4C"; //Red
    wrong++;
    section.getElementsByTagName("button")[
      questions[questionNum].correctAnswer - 1
    ].style.background =
      "#1EBC61";
  }
  //Make all buttons have no onClick events
  for (i = 0; i < section.getElementsByTagName("button").length; i++) {
    section.getElementsByTagName("button")[i].style.pointerEvents = "none";
  }
  updateScores();
  next.style.display = "block";
  blur();
}

//Next question
next.onclick = function() {
  blur();
  updateScores();
  printQuestion();
  next.style.display = "none";
  document.getElementById("nextimg").style.display = "none";
};

//Get new scores
function updateScores() {
  //Get stats
  score.getElementsByTagName("span")[0].innerHTML = right;
  score.getElementsByTagName("span")[1].innerHTML = wrong;
  score.getElementsByTagName("span")[2].innerHTML =
    right + "/" + asked.length + " (" + (right - 1/2*wrong) + ")";
  score.getElementsByTagName("span")[3].innerHTML =
    right + wrong + " av " + questions.length;
}

function blur() {
  if (info) {
    info = false;
    score.style.cssText =
      "filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='3'); -webkit-filter:url(#blur-filter); filter:url(#blur-filter); -webkit-filter: blur(3px); filter: blur(3px);";
    section.style.cssText =
      "filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='3'); -webkit-filter:url(#blur-filter); filter:url(#blur-filter); -webkit-filter: blur(3px); filter: blur(3px);";
  } else {
    score.style.cssText =
      "filter:none; -webkit-filter:none; filter:none; -webkit-filter: none; filter:none;";
    section.style.cssText =
      "filter:none; -webkit-filter:none; filter:none; -webkit-filter: none; filter:none;";
  }
}
