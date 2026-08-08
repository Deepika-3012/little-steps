const express = require("express");
const router = express.Router();

const {
  createDaycare,
  getAllDaycares,
  getDaycareById,
  updateDaycare,
  deleteDaycare,
} = require("../controllers/daycareController");

const protect = require("../middleware/authmiddleware");

router.post("/", protect, createDaycare);

router.get("/", getAllDaycares);

router.get("/:id", getDaycareById);

router.put("/:id", protect, updateDaycare);

router.delete("/:id", protect, deleteDaycare);

module.exports = router;