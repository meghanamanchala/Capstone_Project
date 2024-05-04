// server.js
const express = require('express');
const connectDB = require('./config/db.js'); // Import the connectDB function
const departmentRoutes = require('./routes/department.js'); // Import the department routes
const userRoutes = require('./userRoutes')
const postRoutes = require('./postRoutes.js')
require('dotenv').config();

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Use department routes
    app.use('/departments', departmentRoutes);
    app.use('/authentication', userRoutes);
    app.use('/comments',postRoutes);
    // Start the server  
    app.listen(3002, () => {
      console.log('Server is listening on port 3002');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
