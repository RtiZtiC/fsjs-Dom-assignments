let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let intervalId;
let time = 0;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  intervalId = setInterval(function() {
    time++;
    timer.innerHTML = time;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId=null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  timer.innerHTML = time;
}