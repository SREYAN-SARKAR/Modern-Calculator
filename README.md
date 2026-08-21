# Modern Calculator

<p align="center">
  A modern, responsive, and interactive web calculator built with HTML, CSS, and JavaScript.
</p>

<p align="center">
  <img src="assets/Calculator.png" alt="Modern Calculator Preview" width="350">
</p>

<p align="center">
  <strong>Simple • Responsive • Interactive • User Friendly</strong>
</p>

---

## 📖 About the Project

**Modern Calculator** is a responsive and interactive web-based calculator designed with a clean interface and modern visual style.

The calculator supports essential arithmetic operations along with additional functionality such as **percentage calculations, decimal input, keyboard controls, delete and clear operations, light/dark theme switching, input validation, and error handling**.

The project was developed using **HTML5, CSS3, and Vanilla JavaScript**, with a focus on clean code, maintainability, accessibility, and a smooth user experience across desktop and mobile devices.

---

## ✨ Features

### 🧮 Calculator Functions

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 📊 Percentage calculation
* 🔢 Decimal number support
* 🧹 Clear (`AC`) functionality
* ⌫ Delete (`DE`) functionality
* 🟰 Instant calculation
* 🔄 Automatic handling of consecutive operators

### 🎨 User Interface

* Modern dark calculator interface
* Dynamic gradient background
* Glass-style visual effects
* Rounded calculator buttons
* Highlighted operator buttons
* Dedicated result button
* Smooth hover and click interactions
* Responsive layout

### ⚡ Additional Features

* ⌨️ Full keyboard support
* 🌙 Light and dark theme switching
* 💾 Theme preference saved using `localStorage`
* ⚠️ Input validation
* 🛡️ Error handling for invalid calculations
* 📱 Mobile-friendly responsive design
* ♿ Improved accessibility
* 🎞️ Reduced-motion support
* 🚫 No external JavaScript libraries or frameworks

---

## 🖼️ Preview

<p align="center">
  <img src="assets/Calculator.png" alt="Modern Calculator" width="350">
</p>

---

## 🛠️ Technologies Used

| Technology       | Purpose                                                     |
| ---------------- | ----------------------------------------------------------- |
| **HTML5**        | Provides the structure and semantic layout                  |
| **CSS3**         | Handles styling, responsiveness, themes, and visual effects |
| **JavaScript**   | Handles calculator logic and user interactions              |
| **Google Fonts** | Provides the Poppins typography                             |

---

## 📂 Project Structure

```text
Modern-Calculator/
│
├── assets/
│   └── Calculator.png
│
├──README.md
├── index.html
├── style.css
└──script.js

```

### File Description

| File / Folder    | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| `assets/`        | Contains images and other project assets                             |
| `Calculator.png` | Preview image of the calculator                                      |
| `README.md`      | Project documentation                                                |
| `index.html`     | Main HTML structure of the calculator                                |
| `style.css`      | Styling, responsive layout, themes, and visual effects               |
| `script.js`      | Calculator logic, keyboard support, validation, and theme management |


---

## 🚀 Getting Started

Follow these steps to run the calculator locally.

### 1. Clone the Repository

```bash
git clone https://github.com/SREYAN-SARKAR/Modern-Calculator.git
```

### 2. Navigate to the Project

```bash
cd Modern-Calculator
```

### 3. Open the Calculator

Open the following file in any modern web browser:

```text
index.html
```

No additional installation or dependencies are required.

---

## 💻 How to Use

### Using the Buttons

1. Click a number to enter a value.
2. Select an arithmetic operator.
3. Enter the next value.
4. Press `=` to calculate the result.

### Calculator Controls

| Button  | Function                                    |
| ------- | ------------------------------------------- |
| `AC`    | Clears the entire calculation               |
| `DE`    | Deletes the last entered character          |
| `%`     | Converts the current number to a percentage |
| `.`     | Adds a decimal point                        |
| `=`     | Calculates the result                       |
| `☀ / ☾` | Switches between light and dark themes      |

---

## ⌨️ Keyboard Support

The calculator can also be operated using a keyboard.

| Keyboard Key | Action                |
| ------------ | --------------------- |
| `0 – 9`      | Enter numbers         |
| `+`          | Addition              |
| `-`          | Subtraction           |
| `*`          | Multiplication        |
| `/`          | Division              |
| `.`          | Decimal point         |
| `%`          | Percentage            |
| `Enter`      | Calculate result      |
| `=`          | Calculate result      |
| `Backspace`  | Delete last character |
| `Escape`     | Clear calculator      |
| `C`          | Clear calculator      |

---

## 🌙 Theme Switching

The calculator supports both **Dark Mode** and **Light Mode**.

Click the theme button in the top-right corner of the calculator to switch between themes.

The selected theme is stored in the browser using:

```javascript
localStorage
```

This allows your preferred theme to remain active even after refreshing or reopening the calculator.

---

## ⚙️ Calculator Logic

The calculator uses JavaScript to manage user input and perform calculations.

### Input Validation

Before calculating an expression, the application checks that the expression contains only supported characters:

```text
Numbers
Decimal points
+
-
*
/
```

This prevents unsupported input from being processed.

### Consecutive Operators

The calculator automatically handles consecutive operators.

For example:

```text
10 + *
```

The previous operator is replaced instead of allowing an invalid expression.

### Decimal Handling

The calculator prevents multiple decimal points from being entered into the same number.

For example:

```text
10.5
```

is valid, while:

```text
10.5.7
```

is prevented.

### Error Handling

Invalid calculations, such as division by zero, are detected and handled without breaking the application.

---

## 📱 Responsive Design

The calculator is designed to work across different screen sizes, including:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

CSS media queries automatically adjust:

* Calculator width
* Button dimensions
* Spacing
* Display size
* Font sizes

This allows the calculator to remain comfortable and easy to use on smaller screens.

---

## ♿ Accessibility

Several accessibility features have been included:

* Semantic HTML elements
* Descriptive `aria-label` attributes
* Keyboard navigation
* Visible focus indicators
* Accessible theme toggle
* Support for reduced-motion preferences

---

## 👨‍💻 Author

**Sreyan Sarkar**

<p>
  <a href="https://github.com/SREYAN-SARKAR">
    <img src="https://img.shields.io/badge/GitHub-SREYAN--SARKAR-181717?logo=github" alt="GitHub">
  </a>
</p>

---

## ⭐ Show Your Support

If you like this project, consider giving the repository a **star ⭐** on GitHub.

---
