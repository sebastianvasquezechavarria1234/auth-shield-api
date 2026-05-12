# 🛡️ Auth Shield API

A robust and secure REST API for user authentication and authorization built with **Node.js**, **Express**, and **MongoDB**. This project provides a solid foundation for managing secure access using JSON Web Tokens (JWT).

---

## 🚀 Features

- **🔐 JWT Authentication:** Secure token generation and verification.
- **🛡️ Enhanced Security:** Integrated with `helmet` for HTTP headers and `cors` for cross-origin resource sharing.
- **🧪 Data Validation:** Strict input validation using `Joi` to ensure data integrity.
- **🔑 Password Hashing:** User passwords are safely hashed using `bcrypt`.
- **⚙️ Global Error Handling:** Centralized middleware for catching errors and handling 404 routes.
- **📁 Environment Configuration:** Secure management of sensitive data via `.env`.

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sebastianvasquezechavarria1234/auth-shield-api.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory based on `.env.example`.
   - Add your MongoDB URI and a secure TOKEN_SECRET.

4. **Start the server:**
   ```bash
   npm run dev
   ```

---

## 🔌 API Endpoints

### 🆔 User Routes
- `POST /api/user/register` - Register a new user.
- `POST /api/user/login` - Login and receive an access token.

### 🔒 Protected Routes
- `GET /api/dashboard` - Sample protected route (requires `auth-token` header).

---

## 🔑 Environment Variables

The application requires the following variables in your `.env` file:

| Variable | Description |
| :--- | :--- |
| `MONGODB_URI` | Your MongoDB Atlas connection string. |
| `TOKEN_SECRET` | A long, random string to sign your JWTs. |
| `PORT` | The port for the server (default: 3001). |

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Security:** Jsonwebtoken, Bcrypt, Helmet, Cors
- **Validation:** Joi

---

## 📝 License

This project is licensed under the ISC License.
