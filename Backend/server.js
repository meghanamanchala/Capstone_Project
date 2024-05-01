// server.js
const express = require('express');
const connectDB = require('./config/db.js'); // Import the connectDB function
const departmentRoutes = require('./routes/department.js'); // Import the department routes

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

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
