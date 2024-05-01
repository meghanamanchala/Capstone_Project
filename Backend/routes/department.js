// routes/departments.js
const express = require('express');
const router = express.Router();
const {
  AnaesthesiaModel,
  CardiologyModel,
  DentalModel,
  DermatologyModel,
  ENTModel,
  GastroenterologyModel,
  GynecologistModel,
  NephrologyModel,
  NeurologyModel,
  OphthalmologyModel,
  OncologyModel,
  OrthopedicModel,
  PediatricsModel,
  PulmonologyModel,
  RadiologyModel,
  UrologyModel
} = require('../models/Department');

// GET route to retrieve all Anaesthesia departments
router.get('/anaesthesia', async (req, res) => {
  try {
    const anaesthesias = await AnaesthesiaModel.find();
    res.json(anaesthesias);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Cardiology departments
router.post('/cardiology', async (req, res) => {
  try {
    const cardiology = await CardiologyModel.create(req.body);
    res.json(cardiology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Dental departments
router.get('/dental', async (req, res) => {
  try {
    const dental = await DentalModel.find();
    res.json(dental);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Dermatology departments
router.get('/dermatology', async (req, res) => {
  try {
    const dermatology = await DermatologyModel.find();
    res.json(dermatology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all ENT departments
router.get('/ent', async (req, res) => {
  try {
    const ent = await ENTModel.find();
    res.json(ent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Gastroenterology departments
router.get('/gastroenterology', async (req, res) => {
  try {
    const gastroenterology = await GastroenterologyModel.find();
    res.json(gastroenterology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Gynecologist departments
router.get('/gynecologist', async (req, res) => {
  try {
    const gynecologist = await GynecologistModel.find();
    res.json(gynecologist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Nephrology departments
router.get('/nephrology', async (req, res) => {
  try {
    const nephrology = await NephrologyModel.find();
    res.json(nephrology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Neurology departments
router.get('/neurology', async (req, res) => {
  try {
    const neurology = await NeurologyModel.find();
    res.json(neurology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Ophthalmology departments
router.get('/ophthalmology', async (req, res) => {
  try {
    const ophthalmology = await OphthalmologyModel.find();
    res.json(ophthalmology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Oncology departments
router.get('/oncology', async (req, res) => {
  try {
    const oncology = await OncologyModel.find();
    res.json(oncology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Orthopedic departments
router.get('/orthopedic', async (req, res) => {
  try {
    const orthopedic = await OrthopedicModel.find();
    res.json(orthopedic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Pediatrics departments
router.get('/pediatrics', async (req, res) => {
  try {
    const pediatrics = await PediatricsModel.find();
    res.json(pediatrics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Pulmonology departments
router.get('/pulmonology', async (req, res) => {
  try {
    const pulmonology = await PulmonologyModel.find();
    res.json(pulmonology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Radiology departments
router.get('/radiology', async (req, res) => {
  try {
    const radiology = await RadiologyModel.find();
    res.json(radiology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route to retrieve all Urology departments
router.get('/urology', async (req, res) => {
  try {
    const urology = await UrologyModel.find();
    res.json(urology);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;