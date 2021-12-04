
let sec = 0;
let min = 0;
let hr = 0; 
let stoptime = true;

function timerCycle() {
  sec = parseInt(sec);
  min = parseInt(min);
  hr = parseInt(hr);

  sec = sec + 1;

  if (sec == 60) {
    min = min + 1;
    sec = 0;
  }
  if (min == 60) {
    hr = hr + 1;
    min = 0;
    sec = 0;
  }

  if (sec < 10 || sec == 0) {
    sec = '0' + sec;
  }
  if (min < 10 || min == 0) {
    min = '0' + min;
  }
  if (hr < 10 || hr == 0) {
    hr = '0' + hr;
  }
  var time = hr + ":" + min + ":" + sec;
  document.getElementById("MyClockDisplay").textContent = "You've been driving for " + time;

  setTimeout("timerCycle()", 1000);
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
        console.log('hey');
    }
}

startTimer()
