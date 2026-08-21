# Modern Calculator

<p align="center">
  A modern, responsive, and interactive web calculator built with HTML, CSS, and JavaScript.
</p>

<p align="center">
  <img src="assets/Calculator.png" alt="Modern Calculator Preview" width="350">
</p>

---

## 📖 About the Project

**Modern Calculator** is a responsive web-based calculator designed with a clean interface, smooth interactions, and a modern visual style.

The application allows users to perform essential arithmetic calculations directly in the browser. In addition to basic operations, the calculator includes decimal and percentage calculations, keyboard support, light and dark themes, delete and clear controls, expression validation, and error handling.

The project was built to demonstrate practical frontend development using **HTML, CSS, and JavaScript**, with a focus on clean code, responsive design, accessibility, and user experience.

---

## ✨ Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 📊 Percentage calculation
* 🔢 Decimal number support
* 🧹 Clear all functionality
* ⌫ Delete the last entered character
* 🟰 Instant calculation
* ⌨️ Full keyboard support
* 🌙 Light and dark theme switching
* 💾 Theme preference saved using `localStorage`
* ⚠️ Input validation and error handling
* 🔄 Automatic replacement of consecutive operators
* 🎨 Modern glass-style user interface
* 📱 Responsive design for desktop and mobile devices
* ♿ Improved accessibility with descriptive button labels and keyboard navigation
* ⚡ Lightweight with no external JavaScript libraries or frameworks

---

## 🖼️ Preview

<p align="center">
  <img src="assets/Calculator.png" alt="Calculator Preview" width="350">
</p>

---

## 🛠️ Built With

| Technology       | Purpose                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **HTML5**        | Provides the structure and layout of the calculator                                           |
| **CSS3**         | Handles styling, themes, responsiveness, animations, and visual effects                       |
| **JavaScript**   | Controls calculations, user interactions, keyboard support, validation, and theme persistence |
| **Google Fonts** | Provides the Poppins font used in the interface                                               |

---

## 📂 Project Structure

```text
CodSoft/
│
├── assets/
│   └── Calculator.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### File Description

| File / Folder    | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `assets/`        | Contains project images and visual assets                                                         |
| `Calculator.png` | Preview image of the calculator                                                                   |
| `index.html`     | Contains the structure and interface of the application                                           |
| `style.css`      | Handles the layout, themes, responsiveness, animations, and overall design                        |
| `script.js`      | Contains calculator logic, keyboard controls, validation, error handling, and theme functionality |
| `README.md`      | Provides complete project documentation                                                           |

---

## 🚀 Getting Started

You can run this project locally without installing any additional software or dependencies.

### 1. Clone the Repository

```bash
git clone https://github.com/SREYAN-SARKAR/CodSoft.git
```

### 2. Navigate to the Project Directory

```bash
cd CodSoft
```

### 3. Open the Application

Open the `index.html` file in your preferred web browser.

That's it! 🎉

---

## 💻 How to Use

### Using the Calculator Buttons

1. Click the number buttons to enter values.
2. Select an arithmetic operator.
3. Enter the next value.
4. Press `=` to calculate the result.

### Additional Controls

| Button  | Function                                      |
| ------- | --------------------------------------------- |
| `AC`    | Clears the complete calculation               |
| `DE`    | Deletes the last entered character            |
| `%`     | Converts the current number into a percentage |
| `.`     | Adds a decimal point                          |
| `=`     | Calculates and displays the result            |
| `☀ / ☾` | Switches between light and dark themes        |

---

## ⌨️ Keyboard Support

The calculator can also be controlled using your keyboard.

| Key             | Function                  |
| --------------- | ------------------------- |
| `0–9`           | Enter numbers             |
| `+`             | Addition                  |
| `-`             | Subtraction               |
| `*`             | Multiplication            |
| `/`             | Division                  |
| `.`             | Decimal point             |
| `%`             | Percentage                |
| `Enter` or `=`  | Calculate the result      |
| `Backspace`     | Delete the last character |
| `Escape` or `C` | Clear the calculator      |

---

## 🎨 User Interface

The calculator features a modern and minimal interface designed for a smooth user experience.

### Design Highlights

* Dark glass-style calculator interface
* Dynamic gradient background
* Rounded and responsive buttons
* Highlighted arithmetic operators
* Dedicated result button
* Smooth hover and click interactions
* Responsive layout for smaller screens
* Light and dark theme support
* Reduced-motion support for users who prefer fewer animations

The interface adapts to different screen sizes while maintaining a clean and usable layout.

---

## ⚙️ How the Calculator Works

The calculator logic is handled entirely by JavaScript.

### Input Handling

Each calculator button uses `data-value` or `data-action` attributes. JavaScript detects the selected button and performs the appropriate action.

The application handles:

* Number input
* Decimal input
* Arithmetic operators
* Clear functionality
* Delete functionality
* Percentage conversion
* Expression calculation

### Expression Validation

Before calculating a result, the application validates the entered expression.

The calculator only allows:

* Numbers
* Decimal points
* Addition (`+`)
* Subtraction (`-`)
* Multiplication (`*`)
* Division (`/`)

Invalid or incomplete expressions are detected and handled with an error state.

### Consecutive Operators

If an operator is entered immediately after another operator, the calculator replaces the previous operator instead of creating an invalid expression.

For example:

```text
5 + ×
```

is automatically corrected by replacing the previous operator.

### Result Handling

Calculation results are rounded to avoid unnecessary floating-point precision issues.

For example:

```text
0.1 + 0.2
```

is displayed cleanly instead of showing a long floating-point result.

---

## 🌙 Theme Persistence

The calculator includes both **light and dark modes**.

When a user changes the theme, the selected preference is stored using the browser's `localStorage`.

This means the chosen theme remains active even after refreshing or reopening the page.

---

## 📱 Responsive Design

The calculator is designed to work across different screen sizes.

The layout adapts for:

* Desktop computers
* Laptops
* Tablets
* Mobile devices
* Smaller mobile screens

CSS media queries adjust button sizes, spacing, padding, and display dimensions to provide a better experience on smaller devices.

---

## ♿ Accessibility

The project includes several accessibility improvements:

* Descriptive `aria-label` attributes for important controls
* Visible keyboard focus states
* Semantic button elements
* Keyboard-based calculator controls
* Support for users who prefer reduced motion

---

## 🔮 Future Improvements

Potential improvements for future versions include:

* [ ] Add calculation history
* [ ] Add scientific calculator functions
* [ ] Add parentheses support
* [ ] Add memory functions such as `M+`, `M-`, `MR`, and `MC`
* [ ] Add a copy-result button
* [ ] Add sound or haptic-style interaction feedback
* [ ] Add unit and currency conversion modes
* [ ] Add automated tests
* [ ] Deploy the project using GitHub Pages

---

## 👨‍💻 Author

**Sreyan Sarkar**

GitHub: https://github.com/SREYAN-SARKAR

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a **star ⭐**.

Your support is appreciated and helps motivate future improvements.

---

<p align="center">
  Made with ❤️ by Sreyan Sarkar
</p>
