let timer; // Variable to store the timer interval
let currentTime = 0; // Variable to store the current time
let running = false; // Flag to check if the timer is running

// Connect with html elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Add event listeners to the buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


function startTimer() {
  if (!running && currentTime < 30) { // Check if the timer is not running and time is less than 30
    running = true; // Set running flag to true
    timer = setInterval(() => { // Start the timer interval
      currentTime += 3; // Increment the current time by 3 seocnds
      if (currentTime >= 30) { // Check if the current time is 30 or more
        currentTime = 30; // If current time>=30 set current time to 30
        updateDisplay();
        stopTimer();
      } else {
        updateDisplay();
      }
    }, 1000); // Interval of 1 second (1s=1000ms)
  }
}


function stopTimer() {
  clearInterval(timer); // Clear the timer interval
  running = false; // Set running flag to false
}


function resetTimer() {
  stopTimer(); // Stop the timer
  currentTime = 0; // Reset the current time to 0
  updateDisplay();
}

// Function to update the display with the current time
function updateDisplay() {
  display.textContent = currentTime; // Set the display text to the current time
}