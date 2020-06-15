const menu = document.getElementById('start-menu');
const level = document.getElementById('selection');
const start = document.getElementById('start');
const scoreBoard = document.getElementById("scoreBoard");
const gameOver = document.getElementById("gameover");

let gamespeed; 
let countdownTimerId;

const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.getElementById("time-left");
let score = document.querySelector("#score");

let result = 0;
  let moleMovment;

let currentTime = timeLeft.textContent;

start.addEventListener('click', () => {

    menu.style.display = 'none';
    
    if (level.value === 'Baby') {
        gameSpeed = 1500;
    }
    if (level.value === 'Bold') {
        gameSpeed = 1000;
    }
    if (level.value === "ro-Bot") {
        gameSpeed = 500
        // console.log(gameSpeed);
    }



    countdownTimerId = setInterval(countDown, 1000)    
    
    moveMole()

    
})





function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  // assign id of random position to hit position for later
  hitPosition = randomPosition.id;
}

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  
  moleMovment = setInterval(randomSquare, gameSpeed);
}

// moveMole();

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countdownTimerId);
      clearInterval(moleMovment);
      gameOver.style.display = 'block';
      scoreBoard.textContent = result; 

  }
}

function restart() {
    window.location.reload();
}


