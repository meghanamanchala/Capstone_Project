const express = require('express');
const router = express.Router();
const Department = require('./modeldep.js');

const departments = [
  { name: 'Anesthesiologist', model: Department.AnaesthesiaModel },
  { name: 'Cardiologist', model: Department.CardiologyModel },
  { name: 'Dentist', model: Department.DentalModel },
  { name: 'Dermatologist', model: Department.DermatologyModel },
  { name: 'ENT Specialist', model: Department.ENTModel },
  { name: 'Gastroenterologist', model: Department.GastroenterologyModel },
  { name: 'Gynecologist', model: Department.GynecologistModel },
  { name: 'Nephrologist', model: Department.NephrologyModel },
  { name: 'Neurologist', model: Department.NeurologyModel },
  { name: 'Ophthalmologist', model: Department.OphthalmologyModel },
  { name: 'Oncologist', model: Department.OncologyModel },
  { name: 'Orthopedic Surgeon', model: Department.OrthopedicModel },
  { name: 'Pediatrician', model: Department.PediatricsModel },
  { name: 'Pulmonologist', model: Department.PulmonologyModel },
  { name: 'Radiologist', model: Department.RadiologyModel },
  { name: 'Urologist', model: Department.UrologyModel }
];


departments.forEach(department => {

  router.get(`/${department.name.toLowerCase().replace(' ', '-')}`, async (req, res) => {
    try {
      const departments = await department.model.find();
      res.json(departments);
    } catch (err) {
      res.status(500).json({ Message: err.message });
    }
  });

  router.post(`/${department.name.toLowerCase()}`, async (req, res) => {
    try {
      const newDepartments = Array.isArray(req.body) ? req.body : [req.body];
      const savedDepartments = await department.model.insertMany(newDepartments);
      res.status(201).json(savedDepartments);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  router.put(`/${department.name.toLowerCase()}/:id`, async (req, res) => {
    try {
      const updatedDepartment = await department.model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }  
      );
      if (!updatedDepartment) {
        return res.status(404).json({ message: 'Department not found' });
      }
      res.json(updatedDepartment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

});

module.exports = router;
