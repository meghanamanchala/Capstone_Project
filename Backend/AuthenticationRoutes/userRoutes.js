const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("./userSchema");
const multer = require("multer");
const userRoute = express.Router();
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname,'../uploads');
if(!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Uploads directory
    },
    filename: function(req, file, cb) {
        // Generate unique filename
        cb(null, Date.now() + '-' + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


userRoute.post("/register",upload.single('profilePicture'), async (req, res) => {
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }
        const { username, password, email } = req.body;

        const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).send({ msg: "Username or email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username,
            password: hashedPassword,
            email,
            profilePicture: req.file ? req.file.path : null // Save profile picture path
        });

        await newUser.save();

        res.status(201).send({ msg: "Registration successful.", newUser });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

userRoute.post("/login", async (req, res) => {
    try {
        const { error, value } = loginSchema.validate(req.body);

        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).send({ msg: "User not found." });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send({ msg: "Invalid username or password." });
        }

        res.status(200).send({ msg: "Logged in successfully." });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

userRoute.post("/logout", async (req, res) => {
    try {
    res.status(200).send("Logged out successfully");
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = userRoute;
