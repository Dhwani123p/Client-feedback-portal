const Feedback = require("../models/feedback");

// Submit Feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if all fields are provided
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Create new feedback
        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();

        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get All Feedbacks
exports.getFeedback = async (req, res) => {
    try {
        const feedbackList = await Feedback.find();
        res.status(200).json(feedbackList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
