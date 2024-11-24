const restMinutesElement = document.getElementById("restTimeMin");
const restSecondsElement = document.getElementById("restTimeSec");

const restLessBtn = document.getElementById("lessRestBtn");
const restAddBtn = document.getElementById("addRestBtn");

let restTime = 0;
let minutesTime = 0;

function AddRestTime() {
  console.log("clicked");
  restTime += 5;
  if (restTime === 60) {
    minutesTime += 1;
    restTime = 0;
  }
  restSecondsElement.innerText = restTime.toString().padStart(2, 0);
  restMinutesElement.innerText = minutesTime.toString().padStart(2, 0);
}

function LessRestTime() {
  console.log("lessClicked");
  if (restTime > 0) {
    restTime -= 5;
    if (restTime === 0 && minutesTime > 0) {
      minutesTime -= 1;
      restTime = 60;
    }
    restSecondsElement.innerText = restTime.toString().padStart(2, 0);
    restMinutesElement.innerText = minutesTime.toString().padStart(2, 0);
  }
}

restAddBtn.onclick = AddRestTime;
restLessBtn.onclick = LessRestTime;
