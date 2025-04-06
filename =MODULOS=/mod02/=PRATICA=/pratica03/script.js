// script.js
let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    document.getElementById("display").value = currentInput;
}

function operate(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    if (previousInput === "" || currentInput === "") return;

    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Não é possível dividir por zero!");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    document.getElementById("display").value = currentInput;
}
