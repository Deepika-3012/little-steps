# 🌟 Little Steps - Trusted Childcare Platform

Little Steps is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that helps parents discover trusted daycare centers, register securely, and book childcare services online.

The platform provides a safe, user-friendly, and responsive interface while ensuring secure authentication using JWT.

---

## 🚀 Live Demo

### 🌐 Frontend
https://little-steps-tu7c.vercel.app

### ⚙️ Backend
https://little-steps-server.onrender.com

### 💻 GitHub Repository
https://github.com/Deepika-3012/little-steps

---

# 📌 Features

### 👤 User Authentication
- User Registration
- Secure Login
- JWT Authentication
- Password Encryption using bcrypt

### 🏠 Daycare Management
- View all daycare centers
- View daycare details
- Add daycare centers
- Edit daycare information

### 📅 Booking System
- Book daycare services
- View My Bookings
- Cancel bookings

### 📱 Responsive Design
- Mobile Friendly
- Tablet Friendly
- Desktop Friendly

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap
- CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JSON Web Token (JWT)
- bcrypt

## Deployment
- Vercel
- Render

## Version Control
- Git
- GitHub

---

# 📂 Project Structure

```
Little-Steps/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 📷 Application Screens

- Home Page
- User Registration
- User Login
- Daycare Centers
- Daycare Details
- Add Daycare
- My Bookings
- Dashboard

---

# 🔐 Authentication Flow

1. User registers.
2. Password is encrypted using bcrypt.
3. User logs in.
4. JWT token is generated.
5. Protected routes verify the token.
6. User accesses secure pages.

---

# 📡 API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Daycare

### Get All Daycares

```
GET /api/daycare
```

### Add Daycare

```
POST /api/daycare
```

### Update Daycare

```
PUT /api/daycare/:id
```

---

## Bookings

### Create Booking

```
POST /api/bookings
```

### My Bookings

```
GET /api/bookings/my
```

### Cancel Booking

```
PUT /api/bookings/:id
```

---

# 🗄️ Database Collections

## Users

```
Name
Email
Password
Role
Phone
```

## Daycares

```
Name
Location
Description
Price
Image
Availability
```

## Bookings

```
User ID
Daycare ID
Booking Date
Status
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- MongoDB Atlas Cloud Database
- CORS Configuration
- Environment Variables

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Deepika-3012/little-steps.git
```

## Install Frontend

```bash
cd client
npm install
```

## Install Backend

```bash
cd server
npm install
```

---

# ▶️ Run Project

## Backend

```bash
npm start
```

or

```bash
node server.js
```

## Frontend

```bash
npm run dev
```

---

# 🌍 Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=5000
```

---

# 🧪 Testing

✔ User Registration

✔ User Login

✔ JWT Authentication

✔ Protected Routes

✔ Daycare CRUD Operations

✔ Booking System

✔ MongoDB Integration

✔ Responsive UI

---

# 🚀 Deployment

### Frontend

Vercel

### Backend

Render

### Database

MongoDB Atlas

---

# 💡 Future Enhancements

- Payment Gateway Integration
- Email Notifications
- Google Authentication
- Online Chat Support
- Ratings & Reviews
- Admin Dashboard
- Search & Filter
- Image Upload
- Booking History
- Real-Time Notifications

---

# 👩‍💻 Developed By

**Deepika G**

Computer Science Engineering Graduate

MERN Stack Developer

---

# 📜 License

This project is developed for educational and portfolio purposes.

---

## ⭐ If you like this project, don't forget to Star the repository!
