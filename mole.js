// veribles

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const start = document.querySelector(".start");
const level1 = document.querySelector(".easy");
const level2 = document.querySelector(".medium");
const level3 = document.querySelector(".tricky");
let lastHole;
let timeUp = false;
let score = 0;

// functions
function getScore() {
  if (localStorage.getItem("totalScore") === null) {
      scoreBoard.textContent = 0;
    } else  {
       scoreBoard.textContent = localStorage.getItem("totalScore");
    }
}

function randomTime(min, max) {
  return Math.random() * (max - min) + min;
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
function peep(a, b) {
  let time = randomTime(a, b);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep(a, b);
  }, time);
}

function startGame(a, b) {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep(a, b);
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
  localStorage.setItem("totalScore", scoreBoard.textContent);
}

function training() {
  startGame(200, 1000);
}


function startLevel1() {
  startGame(1000, 1000);
}

function startLevel2() {
  startGame(700, 700);
}

function startLevel3() {
  startGame(400, 400);
}
// events
moles.forEach((mole) => mole.addEventListener("click", bonk));
start.addEventListener("click", training);
level1.addEventListener("click", startLevel1);
level2.addEventListener("click", startLevel2);
level3.addEventListener("click", startLevel3);
getScore()
