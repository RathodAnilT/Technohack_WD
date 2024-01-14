let countdown;
let timerDisplay = document.getElementById('timer');
let durationInput = document.getElementById('duration');
let startTime;

function startTimer() {
    const duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration.');
        return;
    }

    startTime = Date.now() + duration * 1000;
    updateTimerDisplay(duration);
    countdown = setInterval(updateTimerDisplay, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

function resetTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = '00:00';
    durationInput.value = '';
}

function restartTimer() {
    stopTimer();
    resetTimer();
    startTimer();
}

function updateTimerDisplay() {
    const currentTime = Math.round((startTime - Date.now()) / 1000);

    if (currentTime < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = '00:00';
    } else {
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;

        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
    }
}
