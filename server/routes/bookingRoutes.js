const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createBooking,
  getMyBookings,
  cancelBooking,
} = require("../controllers/bookingController");

router.post("/", protect, createBooking);

router.get("/my", protect, getMyBookings);

router.put("/:id", protect, cancelBooking);

module.exports = router;