const express = require("express");
const router = express.Router();
router.post("/login", (req, res) => res.json({ message: "Login successful" }));
router.post("/register", (req, res) => res.json({ message: "User registered" }));
module.exports = router;
