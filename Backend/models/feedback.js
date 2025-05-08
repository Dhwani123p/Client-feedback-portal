const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: String,
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
    message: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
