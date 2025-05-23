# 🎥 YouTube Clone Fullstack Application

A fullstack YouTube-like video sharing platform built using **MERN stack** (MongoDB, Express.js, React, Node.js). Users can register, login, create channels, like videos, post and edit comments.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Register with email and password
  - Login with password hashing using **bcrypt**
  - JWT-based authentication stored in localStorage

- 📺 **Channel Creation**
  - Users can create a YouTube-style channel

- ❤️ **Video Interactions**
  - Like and Unlike videos
  - Post, edit, and delete comments

- 🗂 **Modular Architecture**
  - Backend: Controllers, Routes, and Models
  - Frontend: React components and pages

---

## 🛠️ Tech Stack

### ✅ Frontend
- React (Vite + React Router)
- Axios for HTTP requests
- Context API for state management
- Tailwind CSS (optional)

### ✅ Backend
- Node.js + Express.js
- MongoDB with Mongoose
- Bcrypt for password hashing
- JWT for authentication
- CORS for cross-origin requests

---

## 📁 Folder Structure

```
root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── vite.config.js (if using Vite)
```

---

## 🧑‍💻 How to Run Locally

### 📦 1. Clone the Repository

```bash
git clone https://github.com/NikeshBawankar1921/YoutubeProject
cd YoutubeProject
```

---

### 🚀 2. Setup the Backend

```bash
cd backend
npm install
```

- Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

- Start the backend server:

```bash
node server.js
```

---

### 🌐 3. Setup the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔒 Authentication Workflow

- On login, user credentials are validated.
- Passwords are hashed using **bcrypt**.
- A **JWT token** is generated and saved to `localStorage`.
- Protected routes are handled using a `ProtectedRoute` component.

---

## 📡 API Communication

- **Axios** is used on the frontend for all HTTP requests (GET, POST, PUT, DELETE).
- CORS is enabled on the backend for secure cross-origin communication.

---

## 📌 Note

- Make sure MongoDB is running locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Do not share your `.env` file publicly.

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).