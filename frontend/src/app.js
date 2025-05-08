import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "D:\project_1\frontend\src\components\navbar.js";
import Home from "D:\project_1\frontend\src\pages\home.js";
import Login from "D:\project_1\frontend\src\pages\login.js";
import Register from "D:\project_1\frontend\src\pages\register.js";
import Dashboard from "D:\project_1\frontend\src\components\dashboard.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;

