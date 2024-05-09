const express = require('express');
const router = express.Router();
const Department = require('./modeldep.js');

// Generate routes dynamically for each department
const departments = [
  { name: 'Anesthesiologist', model: Department.AnaesthesiaModel },
  { name: 'Cardiologist', model: Department.CardiologyModel },
  { name: 'Dentologist', model: Department.DentalModel },
  { name: 'Dermatologist', model: Department.DermatologyModel },
  { name: 'ENTologist', model: Department.ENTModel },
  { name: 'Gastroenterologist', model: Department.GastroenterologyModel },
  { name: 'Gynecologist', model: Department.GynecologistModel },
  { name: 'Nephrologist', model: Department.NephrologyModel },
  { name: 'Neurologist', model: Department.NeurologyModel },
  { name: 'Ophthalmologist', model: Department.OphthalmologyModel },
  { name: 'Oncologist', model: Department.OncologyModel },
  { name: 'Orthopedicologist', model: Department.OrthopedicModel },
  { name: 'Pediatrician', model: Department.PediatricsModel },
  { name: 'Pulmonologist', model: Department.PulmonologyModel },
  { name: 'Radiologist', model: Department.RadiologyModel },
  { name: 'Urologist', model: Department.UrologyModel }
];


departments.forEach(department => {
  // GET route to retrieve all departments of a specific type
  router.get(`/${department.name.toLowerCase()}`, async (req, res) => {
    try {
      const departments = await department.model.find();
      res.json(departments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
});

module.exports = router;
