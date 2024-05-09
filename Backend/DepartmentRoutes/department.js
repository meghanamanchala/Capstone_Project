const express = require('express');
const router = express.Router();
const Department = require('./modeldep.js');

// Generate routes dynamically for each department
const departments = [
  { name: 'Anaesthesia', model: Department.AnaesthesiaModel },
  { name: 'Cardiology', model: Department.CardiologyModel },
  { name: 'Dental', model: Department.DentalModel },
  { name: 'Dermatology', model: Department.DermatologyModel },
  { name: 'ENT', model: Department.ENTModel },
  { name: 'Gastroenterology', model: Department.GastroenterologyModel },
  { name: 'Gynecologist', model: Department.GynecologistModel },
  { name: 'Nephrology', model: Department.NephrologyModel },
  { name: 'Neurology', model: Department.NeurologyModel },
  { name: 'Ophthalmology', model: Department.OphthalmologyModel },
  { name: 'Oncology', model: Department.OncologyModel },
  { name: 'Orthopedic', model: Department.OrthopedicModel },
  { name: 'Pediatrics', model: Department.PediatricsModel },
  { name: 'Pulmonology', model: Department.PulmonologyModel },
  { name: 'Radiology', model: Department.RadiologyModel },
  { name: 'Urology', model: Department.UrologyModel }
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

  // POST route to create a new department of a specific type
  router.post(`/${department.name.toLowerCase()}`, async (req, res) => {
    try {
      const newDepartment = await department.model.create(req.body);
      res.status(201).json(newDepartment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
});

module.exports = router;
