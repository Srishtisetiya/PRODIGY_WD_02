let hours = 0, minutes = 0, seconds = 0;
let timer;
let isRunning = false;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const format = (val) => val < 10 ? '0' + val : val;
  document.getElementById("time").textContent =
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function start() {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  pause();
  hours = minutes = seconds = 0;
  document.getElementById("time").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.getElementById("time").textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
  }
}
