const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const daycareRoutes = require("./routes/daycareRoutes");

dotenv.config();

connectDB();

const app = express();
const bookingRoutes = require("./routes/bookingRoutes");
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/daycare", daycareRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Little Steps Backend 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});