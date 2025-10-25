## 🛍️ MiniShop – Hackathon E-Commerce Web App

A modern, fully responsive mini e-commerce site built using React + Vite + Tailwind CSS.
This project was created as part of the SMIT Hackathon to showcase frontend development, clean UI design, and state management with React Context API.

## 🚀 Features
🧩 Core Functionality

🏠 Home Page – Displays all products fetched from the FakeStore API
.
Includes search, category, and price filters.

🛒 Cart Page – View, update, and remove items with real-time total calculations.

💳 Checkout Page – User form with validation, order summary, and success alert.

💾 Cart Persistence – Cart data stored in localStorage to retain state after refresh.

💎 UI & UX Enhancements

🎨 Modern Gradient Design with smooth animations and hover effects.

📱 Fully Responsive on all devices (mobile, tablet, desktop).

⚡ Performance-Optimized using Vite.

🧠 React Hooks for clean and modular logic (useState, useEffect, custom context hook).

🌙 Tailwind Animations and transitions for engaging interaction.

🧭 Scroll-to-Top Button for seamless navigation.

## 🧰 Tech Stack
Technology	Purpose
React (Vite)	Component-based UI framework
Tailwind CSS	Utility-first styling and responsiveness
React Router DOM	Page routing
Lucide React Icons	Modern icon set
FakeStore API	Product data
localStorage	Cart persistence
🏗️ Project Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ScrollToTopButton.jsx
│
├── context/
│   └── CartContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
│
├── App.jsx
└── main.jsx

## ⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/furqan934/smit-hackathon.git
cd smit-hackathon

2️⃣ Install Dependencies (using Yarn)
``` bash
yarn
``` 

3️⃣ Run the Development Server
``` bash
yarn dev
```

The app will be live at 👉 http://localhost:5173

🌐 Deployment (Netlify)

You can easily deploy this project by connecting your GitHub repo to Netlify:

Go to Netlify Dashboard
.

Click “Add New Site” → “Import from GitHub.”

Choose your repo (smit-hackathon).

Build command:
``` bash
yarn build
``` 

Publish directory:
``` bash
dist
``` 

Click Deploy 🚀

## 👨‍💻 Developer

Muhammad Furqan
🎓 Front-End Developer | React Enthusiast | Tailwind UI Designer
📍 SMIT Peshawar
📧 furqanmf234@gmail.com.com

🔗 GitHub
 | LinkedIn

🏁 Acknowledgements

FakeStore API
 for providing mock e-commerce data.

Tailwind CSS
 for effortless styling.

React Vite
 for lightning-fast development experience.

SMIT Hackathon organizers for this opportunity to showcase skills.
