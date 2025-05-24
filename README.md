
# 🎥 YouTube Clone – Fullstack MERN Application

A full-stack video-sharing platform inspired by YouTube, built using the **MERN stack** (MongoDB, Express.js, React, Node.js). Users can register, log in, create channels, upload videos, like/unlike content, and comment.

---

## 📽️ Video Demo

🎬 [Watch on Google Drive](https://drive.google.com/file/d/1WVqdrewhzTZyXKOF0fVS8oWzKOI4ATfe/view?usp=sharing)

---

## 🚀 Features

- 🔐 **User Authentication**
  - Register and login with secure password handling using **bcrypt**
  - JWT-based authentication stored in `localStorage`

- 📺 **Channel Management**
  - Users can create personalized channels to upload and manage videos

- ❤️ **Video Interactions**
  - Like/unlike videos
  - Post and edit comments on videos

- 🧱 **Modular Codebase**
  - Clean separation of frontend and backend code using controllers, routes, and reusable components

---

## 🛠️ Tech Stack

### 🔹 Frontend
- **React** (with Vite for fast bundling)
- **React Router** for client-side routing
- **Axios** for API communication
- **Tailwind CSS** for modern responsive UI
- **Context API** for global state management

### 🔹 Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Bcrypt** for password hashing
- **JWT** for user authentication
- **CORS** for cross-origin API access

---

## 📁 Folder Structure

```
YoutubeProject/
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
│   └── vite.config.js
└── README.md
```

---

## 🧑‍💻 Getting Started Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/NikeshBawankar1921/YoutubeProject
cd YoutubeProject
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Your app will be available at `http://localhost:5173` by default.

---

## 🔐 Authentication Flow

1. On login, user credentials are validated.
2. Passwords are securely hashed using **bcrypt**.
3. A **JWT token** is generated and stored in `localStorage`.
4. Protected routes are guarded using a `ProtectedRoute` component on the frontend.

---

## 📡 API Communication

- All HTTP communication is handled using **Axios**.
- Backend API supports CRUD operations for users, channels, videos, and comments.
- CORS is enabled for frontend-backend communication.

---

## 📝 Notes

- Ensure MongoDB is running locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Never commit your `.env` file or secrets to version control.

---

## 🤝 Contributing

Pull requests are welcome! For major feature changes, please open an issue first to discuss the proposed changes.

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).
