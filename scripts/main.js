const secElement = document.getElementById("second");
const minElement = document.getElementById("minute");
const hourElement = document.getElementById("hour");

const startButton = document.getElementById("togglePlay");

let seconds = 9;
let minutes = 0;
let hours = 0;

let intervalId;
let isPaused = true;
let isStarting = true;

function Timer(s, m, h) {
  console.log("something is happening");
  let seconds = 3;
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes = minutes > 0 ? minutes - 1 : 0;
  }
  if (minutes < 0) {
    minutes = hours > 0 ? 59 : 0;
    hours = hours > 0 ? hours - 1 : 0;
  }
  if (hours === 0 && minutes === 0 && seconds === 0) {
    let seconds = s;
    clearInterval(intervalId);
    secElement.innerText = "finish!";
  }
  secElement.innerText = seconds.toLocaleString().padStart(2, 0);
  minElement.innerText = minutes.toLocaleString().padStart(2, 0);
  hourElement.innerText = hours.toLocaleString().padStart(2, 0);
}

function TestStart() {
  if (isPaused) {
    console.log("set interval");
    intervalId = setInterval(() => Timer(), 1000);
    console.log(intervalId);
    isPaused = !isPaused;
    startButton.className = "pause";
    startButton.innerText = "PAUSE";
  } else {
    console.log("clear");
    clearInterval(intervalId);
    console.log(intervalId);
    isPaused = !isPaused;
    startButton.className = "start";
    startButton.innerText = "Resume";
  }
}

function Start() {
  console.log("pushed...");
  if (isStarting) {
    console.log("isStarting...");
    isStarting = !isStarting;
    const startingTimer = setInterval(() => Timer(), 1000);
    clearInterval(startingTimer);
  }
  if (isPaused) {
    console.log("isPaused...");
    intervalId = setInterval(() => Timer(), 1000);
    isPaused = !isPaused;
    startButton.className = "pause";
    startButton.innerText = "PAUSE";
  } else {
    clearInterval(intervalId);
    isPaused = !isPaused;
    startButton.className = "start";
    startButton.innerText = "Resume";
  }
}

startButton.addEventListener("click", TestStart);
