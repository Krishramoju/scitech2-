const express = require("express");
const router = express.Router();
const User = require("./models").User; // Using models defined below

// Sample route for user registration (for demonstration)
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send("User registered");
});

// Sample route to get all items (for demonstration)
router.get("/items", async (req, res) => {
    // Here you would fetch items from the database
    res.json([{ id: 1, title: "Artwork 1" }, { id: 2, title: "Artwork 2" }]);
});

module.exports = router;
