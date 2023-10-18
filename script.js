const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

let intervalId; // Declare a variable to store the interval ID
let count = 0;

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => { // Fixed the typo in setInterval
        count += 1;
        updateValue();
    }, 100);
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => { // Fixed the typo in setInterval
        count -= 1;
        updateValue();
    }, 100);
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});

document.addEventListener('mouseup', () => { // Fixed the placement of parenthesis
    clearInterval(intervalId); // Clear the interval when mouse is released
});

function updateValue() {
    value.textContent = count;
}