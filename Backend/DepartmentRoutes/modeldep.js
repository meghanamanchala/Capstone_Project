const mongoose = require('mongoose');

function createDepartmentModel(departmentName) {
  const DepartmentSchema = new mongoose.Schema({
    name: String,
    experience: String,
    education: String,
    languagesSpoken: String
  });

  return mongoose.model(departmentName, DepartmentSchema);
}

const AnaesthesiaModel = createDepartmentModel('Anaesthesia');
const CardiologyModel = createDepartmentModel('Cardiology');
const DentalModel = createDepartmentModel('Dental');
const DermatologyModel = createDepartmentModel('Dermatology');
const ENTModel = createDepartmentModel('ENT');
const GastroenterologyModel = createDepartmentModel('Gastroenterology');
const GynecologistModel = createDepartmentModel('Gynecologist');
const NephrologyModel = createDepartmentModel('Nephrology');
const NeurologyModel = createDepartmentModel('Neurology');
const OphthalmologyModel = createDepartmentModel('Ophthalmology');
const OncologyModel = createDepartmentModel('Oncology');
const OrthopedicModel = createDepartmentModel('Orthopedic');
const PediatricsModel = createDepartmentModel('Pediatrics');
const PulmonologyModel = createDepartmentModel('Pulmonology');
const RadiologyModel = createDepartmentModel('Radiology');
const UrologyModel = createDepartmentModel('Urology');

// Export all models
module.exports = {
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
};
