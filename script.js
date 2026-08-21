/* =========================================================
   Modern Calculator
   Author: Sreyan Sarkar

   Features:
   - Basic arithmetic operations
   - Percentage
   - Decimal calculations
   - Delete / Clear
   - Keyboard support
   - Light / Dark theme
   - Safe expression evaluation
   - Error handling
   ========================================================= */

"use strict";

// ---------- DOM Elements ----------

const display = document.getElementById("display");
const previousDisplay = document.getElementById("previous-display");
const buttons = document.querySelector(".buttons");
const themeToggle = document.getElementById("theme-toggle");

// ---------- Calculator State ----------

let expression = "";
let justCalculated = false;

// ---------- Operators ----------

const operators = ["+", "-", "*", "/"];

// ---------- Display Helpers ----------

function updateDisplay() {
    display.value = expression || "0";
}

function showError() {
    display.value = "Error";
    display.classList.add("error");

    setTimeout(() => {
        display.classList.remove("error");
        expression = "";
        previousDisplay.textContent = "";
        updateDisplay();
    }, 1000);
}

function clearCalculator() {
    expression = "";
    justCalculated = false;

    display.classList.remove("error");
    previousDisplay.textContent = "";

    updateDisplay();
}

function deleteLastCharacter() {
    if (justCalculated) {
        clearCalculator();
        return;
    }

    expression = expression.slice(0, -1);
    updateDisplay();
}

// ---------- Number Input ----------

function appendNumber(number) {
    if (justCalculated) {
        expression = "";
        previousDisplay.textContent = "";
        justCalculated = false;
    }

    expression += number;
    updateDisplay();
}

// ---------- Decimal Input ----------

function appendDecimal() {
    if (justCalculated) {
        expression = "";
        previousDisplay.textContent = "";
        justCalculated = false;
    }

    const currentNumber = getCurrentNumber();

    // Prevent multiple decimal points in the same number
    if (currentNumber.includes(".")) {
        return;
    }

    // Automatically add zero before decimal
    if (
        expression === "" ||
        operators.includes(expression.slice(-1))
    ) {
        expression += "0";
    }

    expression += ".";

    updateDisplay();
}

// ---------- Operator Input ----------

function appendOperator(operator) {
    if (!expression) {
        // Allow negative numbers at the beginning
        if (operator === "-") {
            expression = "-";
            updateDisplay();
        }

        return;
    }

    justCalculated = false;

    const lastCharacter = expression.slice(-1);

    // Replace the previous operator instead of adding another
    if (operators.includes(lastCharacter)) {
        expression = expression.slice(0, -1);
    }

    expression += operator;

    updateDisplay();
}

// ---------- Get Current Number ----------

function getCurrentNumber() {
    const parts = expression.split(/[+\-*/]/);
    return parts[parts.length - 1];
}

// ---------- Percentage ----------

function convertToPercentage() {
    if (!expression) {
        return;
    }

    const match = expression.match(/(\d+\.?\d*)$/);

    if (!match) {
        return;
    }

    const number = parseFloat(match[1]);
    const percentage = number / 100;

    expression =
        expression.slice(0, -match[1].length) +
        percentage;

    updateDisplay();
}

// ---------- Expression Validation ----------

function isValidExpression(value) {
    if (!value) {
        return false;
    }

    // Only allow numbers, decimal points and arithmetic operators
    if (!/^[0-9+\-*/.]+$/.test(value)) {
        return false;
    }

    // Prevent incomplete expressions
    if (operators.includes(value.slice(-1))) {
        return false;
    }

    // Prevent invalid decimal sequences
    if (/\.\./.test(value)) {
        return false;
    }

    return true;
}

// ---------- Safe Calculation ----------

function calculateExpression() {
    if (!expression || justCalculated) {
        return;
    }

    if (!isValidExpression(expression)) {
        showError();
        return;
    }

    try {
        /*
         * The expression has already been strictly validated
         * against the allowed calculator characters.
         *
         * No variables, functions, letters, or other arbitrary
         * input can reach the evaluator.
         */
        const result = Function(
            `"use strict"; return (${expression})`
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        const roundedResult = Number(
            parseFloat(result.toFixed(10))
        );

        previousDisplay.textContent = `${expression} =`;

        expression = String(roundedResult);
        justCalculated = true;

        updateDisplay();

    } catch (error) {
        showError();
    }
}

// ---------- Button Handling ----------

buttons.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
        clearCalculator();
        return;
    }

    if (action === "delete") {
        deleteLastCharacter();
        return;
    }

    if (action === "percentage") {
        convertToPercentage();
        return;
    }

    if (action === "calculate") {
        calculateExpression();
        return;
    }

    if (!value) {
        return;
    }

    if (/^\d$/.test(value)) {
        appendNumber(value);
        return;
    }

    if (value === ".") {
        appendDecimal();
        return;
    }

    if (operators.includes(value)) {
        appendOperator(value);
    }
});

// ---------- Keyboard Support ----------

document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Numbers
    if (/^\d$/.test(key)) {
        appendNumber(key);
        return;
    }

    // Decimal
    if (key === ".") {
        appendDecimal();
        return;
    }

    // Operators
    if (operators.includes(key)) {
        appendOperator(key);
        return;
    }

    // Calculate
    if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculateExpression();
        return;
    }

    // Delete
    if (key === "Backspace") {
        deleteLastCharacter();
        return;
    }

    // Clear
    if (key === "Escape" || key.toLowerCase() === "c") {
        clearCalculator();
        return;
    }

    // Percentage
    if (key === "%") {
        convertToPercentage();
    }
});

// ---------- Theme Handling ----------

function setTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light-theme", isLight);

    themeToggle.textContent = isLight ? "☾" : "☀";

    themeToggle.setAttribute(
        "aria-label",
        isLight
            ? "Switch to dark theme"
            : "Switch to light theme"
    );

    localStorage.setItem("calculator-theme", theme);
}

function toggleTheme() {
    const isLight =
        document.body.classList.contains("light-theme");

    setTheme(isLight ? "dark" : "light");
}

themeToggle.addEventListener("click", toggleTheme);

// ---------- Restore Saved Theme ----------

const savedTheme = localStorage.getItem("calculator-theme");

if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
} else {
    setTheme("dark");
}

// ---------- Initial Display ----------

updateDisplay();
```
