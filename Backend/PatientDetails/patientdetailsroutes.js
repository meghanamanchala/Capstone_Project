const express = require('express');
const PatientDetails = require('./patientdetails.js');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const patientDetails = new PatientDetails(req.body);
      await patientDetails.save();
      res.status(201).json(patientDetails);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

module.exports = router;
;
