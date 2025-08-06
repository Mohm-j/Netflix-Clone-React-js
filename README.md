# 🎬 React Movie App

A modern Netflix-style movie web application built with React, Firebase authentication, TMDB API, and responsive UI.

## 🚀 Features

- 🔐 User authentication with Firebase (Sign Up / Sign In)
- 🎥 Browse movies (now playing, popular, etc.) from TMDB API
- ▶️ Movie trailer player with protected route
- 🍿 Responsive, clean UI with smooth user experience
- ☁️ React Context for global state management
- 🔔 Toast notifications for user feedback
- 🌀 Loading spinners during async operations

---

## 🛠️ Technologies Used

- **React**
- **React Router DOM**
- **Firebase Authentication**
- **Axios** (for API calls)
- **TMDB API**
- **React Toastify**
- **CSS Modules / Custom styling**

---

## 📦 Project Structure

```
src/
├── api/                # Axios instance and API config
├── assets/             # Images and icons
├── components/         # Reusable components (Navbar, TitleCards, etc.)
├── pages/              # Route pages (Home, Login, Player, MovieDetails)
├── utils/              # Utility functions (ProtectedRoute, etc.)
├── context/            # Auth context provider
├── App.jsx             # Main route config
└── main.jsx            # App entry point
```

---

## 🔧 Setup & Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Mohm-j/Netflix-Clone-React-js
   cd Netflix-Clone-React-js
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 📡 API Reference

This project uses [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api) API. You’ll need a valid TMDB API key to fetch movie data.

---

## 🔐 Authentication

Firebase Authentication is used to:

- Protect routes (like the player page)
- Maintain user sessions
- Enable Sign In / Sign Up functionality

---

## 🙌 Credits

- [TMDB](https://www.themoviedb.org/) for the API
- [Firebase](https://firebase.google.com/) for authentication
- Inspired by Netflix UI

---

🔗 **GitHub**: [https://github.com/Mohm-j](https://github.com/Mohm-j)
