import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [message, setMessage] = useState("");

    const submitFeedback = async () => {
        await axios.post("http://localhost:5000/api/feedback/submit", { category, priority, message });
        alert("Feedback submitted!");
    };

    return (
        <div>
            <h2>Submit Feedback</h2>
            <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
            <select onChange={(e) => setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <textarea placeholder="Your Feedback" onChange={(e) => setMessage(e.target.value)} />
            <button onClick={submitFeedback}>Submit</button>
        </div>
    );
}

export default FeedbackForm;
