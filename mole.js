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
function peep() {
  let time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
  localStorage.setItem("totalScore", scoreBoard.textContent);
}

function peepLevel1() {
  let time = randomTime(900, 900);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peepLevel1();
  }, time);
}
function startLevel1() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peepLevel1();
  setTimeout(() => (timeUp = true), 10000);
}
function peepLevel2() {
  let time = randomTime(700, 700);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peepLevel2();
  }, time);
}
function startLevel2() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peepLevel2();
  setTimeout(() => (timeUp = true), 10000);
}
function peepLevel3() {
  let time = randomTime(400, 400);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peepLevel3();
  }, time);
}
function startLevel3() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peepLevel3();
  setTimeout(() => (timeUp = true), 10000);
}

/*function getScore() {
    if (localStorage.getItem("scoreBoard") === null) {
        scoreBoard.textContent = 0;
      } else {
        scoreBoard.textContent = localStorage.getItem("scoreBoard");
      }
}
function setScore () {
    if (e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem("scoreBoard", scoreBoard.textContent);
          scoreBoard.blur();
        }
      } else {
        localStorage.setItem("scoreBoard", scoreBoard.textContent);
      }

    localStorage.setItem('scoreBoard', scoreBoard.textContent);
}

getScore()*/
// events
moles.forEach((mole) => mole.addEventListener("click", bonk));
start.addEventListener("click", startGame);
level1.addEventListener("click", startLevel1);
level2.addEventListener("click", startLevel2);
level3.addEventListener("click", startLevel3);
getScore()
