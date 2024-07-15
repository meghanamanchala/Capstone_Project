// const express = require("express");
// const doctorDetails = require('./DoctorSchema');
// const DocAdminRoute = express.Router();
// const bcrypt = require("bcrypt");

// DocAdminRoute.post('/doctorLogin', async (req, res) => {
//     try {
//         const { Docusername, Docpassword } = req.body; // Ensure correct field names
//         const existingUser = await doctorDetails.findOne({ Docusername }); // Check for existing user based on 'Docusername'
//         if (existingUser) {
//             return res.status(409).send({ msg: "Username already exists." }); // Adjust error message
//         }
//         const hashedPassword = await bcrypt.hash(Docpassword, 10);
//         const newUser = new doctorDetails({
//             Docusername,
//             Docpassword: hashedPassword,
//         });
//         await newUser.save();
//         res.status(201).send({ msg: "Registration successful.", newUser });
//     } catch (error) {
//         res.status(500).send({ error: "Internal server error" });
//     }
// });

// module.exports = DocAdminRoute;
