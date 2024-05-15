const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("./userSchema");
const userRoute = express.Router();

// Register endpoint
userRoute.post("/register", async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).send({ msg: "Username or email already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new UserModel({
            username,
            password: hashedPassword,
            email
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).send({ msg: "Registration successful.", newUser });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

// Login endpoint
userRoute.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).send({ msg: "User not found." });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send({ msg: "Invalid username or password." });
        }

        res.status(200).send({ msg: "Logged in successfully." });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

// Logout endpoint
userRoute.post("/logout", async (req, res) => {
    try {
      const { username, password } = req.body;

      // Find the user by username
      const user = await UserModel.findOne({ username });
      if (!user) {
          return res.status(404).send({ msg: "User not found." });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
          return res.status(401).send({ msg: "Invalid username or password." });
      }
        res.status(200).send("Logged out successfully");
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = userRoute;
