let counter = document.getElementById('counter');
let cps = document.getElementById('cps');
let reset = document.getElementById('reset');

let nombreCPS = parseInt(counter.innerText);
cps.addEventListener('click',(e) => {
  if (nombreCPS === 0) {
    let counterMoins = setInterval (() => {
      timeSec--;
      displayTime(timeSec);
      if (timeSec <= 0 || timeSec < 1) {
        clearInterval(counterMoins);
      }
    },1000)
  }
  nombreCPS = nombreCPS+1;
  counter.innerHTML = nombreCPS;
})

reset.addEventListener('click', () => {
  nombreCPS = 0;
  counter.innerHTML = nombreCPS;
})

let timer = document.getElementById ('timer');
let timeSec = 5;
let timeMinSec = 99;

timer.innerHTML = `${timeSec}:${timeMinSec}`;

function displayTime(second) {
  let sec = Math.floor(second % 60);
  timer.innerHTML = `${sec}:00`;
}