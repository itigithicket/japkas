let timer;
let seconds = 0;
let running = false;

function updateDisplay() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  document.getElementById('timer-display').textContent =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

document.getElementById('start-btn').addEventListener('click', () => {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

document.getElementById('pause-btn').addEventListener('click', () => {
  clearInterval(timer);
  running = false;
});

document.getElementById('reset-btn').addEventListener('click', () => {
  clearInterval(timer);
  seconds = 0;
  running = false;
  updateDisplay();
});

// 初期表示を設定
updateDisplay();
