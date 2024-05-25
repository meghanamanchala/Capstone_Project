const express = require('express');
const connectDB = require('./config/db.js'); 
const cors = require('cors');
const departmentRoutes = require('./DepartmentRoutes/department.js'); 
const userRoutes = require('./AuthenticationRoutes/userRoutes.js');
const postRoutes = require('./PostQueryRoutes/postRoutes.js');
const patientRoutes = require('./PatientDetails/patientdetailsroutes.js')
const DocAdminRoute = require('./DoctorLogin/DoctorRoutes.js');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/departments', departmentRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/patients', patientRoutes);
app.use('/docAdmin',DocAdminRoute);


app.get('/', (req, res) => {
    res.status(200).send("Connected to DB");
});

connectDB().then(() => {
    console.log('Connected to MongoDB');
    
    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});