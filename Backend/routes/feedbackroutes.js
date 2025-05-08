const express = require("express");
const { submitFeedback, getFeedback } = require("../controllers/feedbackcontrollers");
const authMiddleware = require("../middleware/authmiddleware.js");

const router = express.Router();

router.post("/submit", authMiddleware, submitFeedback);
router.get("/list", authMiddleware, getFeedback);

module.exports = router;
