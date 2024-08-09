document.addEventListener('DOMContentLoaded', function() {
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const resetBtn = document.getElementById('reset-btn');
    let count = 0;

    incrementBtn.addEventListener('click', function() {
        count++;
        counterDisplay.textContent = count;
    });

    resetBtn.addEventListener('click', function() {
        count = 0;
        counterDisplay.textContent = count;
    });
});

