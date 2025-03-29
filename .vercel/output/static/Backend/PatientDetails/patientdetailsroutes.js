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
  
  router.get('/', async (req, res) => {
    try {
      const patients = await PatientDetails.find().populate('doctor');
      res.json(patients);
    } catch (err) {
      console.error('Error fetching patient details:', err);
      res.status(500).json({ message: err.message });
    }
  });

  // PUT endpoint to update a patient record by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const updatedPatient = await PatientDetails.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedPatient) {
          return res.status(404).json({ message: 'Patient not found' });
      }
      res.status(200).json(updatedPatient);
  } catch (err) {
      console.error('Error updating patient:', err);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE endpoint to delete a patient record by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const deletedPatient = await PatientDetails.findByIdAndDelete(id);
      if (!deletedPatient) {
          return res.status(404).json({ message: 'Patient not found' });
      }
      res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (err) {
      console.error('Error deleting patient:', err);
      res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
;
