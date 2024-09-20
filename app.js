const express = require('express');
const User = require('./models/userModel'); // Assuming userModel has the subscriber schema
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/subscribers", async (req, res) => {
    try {
        const subscribers = await User.find();
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400).json({ message: "Error fetching subscribers" });
    }
});

app.get("/subscribers/names", async (req, res) => {
    try {
        const subscribers = await User.find({}, { name: 1, subscribedChannel: 1, _id: 0 });
        res.status(200).json(subscribers);
    } catch (err) {
        res.status(400).json({ message: "Error fetching names" });
    }
});

app.get("/subscribers/:id", async (req, res) => {
    try {
        const subscriber = await User.findById(req.params.id);
        if (!subscriber) return res.status(404).json({ message: "Subscriber not found" });
        res.status(200).json(subscriber);
    } catch (err) {
        res.status(400).json({ message: "Invalid ID" });
    }
});

module.exports = app;
