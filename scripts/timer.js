const secElement = document.getElementById("second");
const minElement = document.getElementById("minute");
const hourElement = document.getElementById("hour");

const startButton = document.getElementById("togglePlay");

let intervalId;

let sec = 5;
let min = 1;

let oneSecDelay = 1000;
let userInputSeconds = 32;
let userInputRounds = 3;

function Timer(seconds, rounds) {
  sec--;
  if (sec < 0) {
    sec = 59;
    min--;
    if (min < 0) {
      clearInterval(intervalId);
      sec = 0;
      min = 0;
    }
  }
  secElement.innerText = sec.toLocaleString().padStart(2, 0);
  minElement.innerText = min.toLocaleString().padStart(2, 0);
}

function Start() {
  intervalId = setInterval(
    Timer,
    oneSecDelay,
    userInputSeconds,
    userInputRounds
  );
}

startButton.addEventListener("click", Start);

// const delay = 5000
// const time = 10000
// const intervalID = setTimeout(myCallback, 5000, 10000);
// console.log(`${time/1000} sec timer starting in ${delay/1000} secs`)

// function myCallback(time) {
//     console.log(`${time/1000} sec timer starting now`)
//     setTimeout(() => {
//       console.log(`${time/1000} secs have passed`)
//     }, time)
// }
