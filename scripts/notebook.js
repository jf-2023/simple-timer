const setRoundsEl = document.getElementById("numRounds");
const addTimeBtn = document.getElementById("add");
const lessTimeBtn = document.getElementById("less");

let rounds = 0;

function AddTime() {
  rounds++;
  setRoundsEl.innerText = rounds;
}

function LessTime() {
  if (rounds > 0) {
    rounds--;
    setRoundsEl.innerHTML = rounds;
  }
}

addTimeBtn.onclick = AddTime;
lessTimeBtn.onclick = LessTime;
