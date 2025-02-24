let currentInput = '';
let operator = '';
let previousInput = '';
let isDarkMode = false;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (!currentInput || !previousInput) return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Error: Division by zero');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = (prev * current) / 100;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    document.getElementById('display').value = currentInput;
}

function calculateSquareRoot() {
    if (currentInput === '') return;
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    document.getElementById('display').value = currentInput;
}

function calculateSquare() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) ** 2).toString();
    document.getElementById('display').value = currentInput;
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    const calculator = document.getElementById('calculator');
    calculator.classList.toggle('dark-mode', isDarkMode);
}
