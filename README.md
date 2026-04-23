# RidlTech — Miftah Faridl Portfolio

A premium, highly-responsive, and dynamic portfolio website built for **Miftah Faridl**, a Mobile & Web Developer specializing in Flutter, React, Laravel, and modern digital ecosystems.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

---

## ✨ Features

- **🎯 Dynamic Data Injection**: Content is managed centrally in `data.js` for easy updates without touching the HTML structure.
- **🌓 Dark/Light Mode**: Seamless theme switching with persistent user preference.
- **📱 Ultra Responsive**: Optimized for all devices using Bootstrap 5 grid and custom media queries.
- **🚀 Performance Focused**: Lightweight vanilla JavaScript and CSS for fast loading times.
- **🎭 Smooth Animations**: Integrated with **AOS (Animate On Scroll)** for a premium feel.
- **📂 Filterable Work**: Easily navigate between Mobile, Web, and Backend projects.
- **🔍 Detailed Modals**: Interactive project details with technology badges and direct links.

---

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Custom CSS3, [Bootstrap 5.3](https://getbootstrap.com/)
- **Animations**: [AOS.js](https://michalsnik.github.io/aos/)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Typography**: Outfit & Inter (Google Fonts)

---

## 🚀 Getting Started

Since this is a static website, you have several ways to run it locally:

### Option 1: Direct Open (Easiest)
Simply double-click `index.html` in your file explorer to open it in your default browser.

### Option 2: VS Code Live Server (Recommended)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Click **"Go Live"** in the bottom right corner.

### Option 3: Using Node.js (via Terminal)
If you have Node.js installed, you can run a local server quickly:

```bash
# Using npm (recommended)
npm run dev

# Or using npx directly
npx serve .
```

---

## 📁 Project Structure

```text
ridltech/
├── assets/             # Images, icons, and downloadable files
├── data.js             # Central configuration and portfolio content
├── script.js           # Core logic for rendering and interactions
├── style.css           # Premium design system and layout
├── index.html          # Main entry point
└── README.md           # Project documentation
```

---

## ✍️ Customizing Content

To update your profile, skills, or projects, you only need to edit **`data.js`**. The application will automatically reflect the changes on the next refresh.

Example updating profile:
```javascript
const PORTFOLIO_DATA = {
  profile: {
    name: "Your Name",
    role: "Your Role",
    // ...
  },
  // ...
};
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Crafted with ❤️ by Miftah Faridl
</p>