const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(15).required(),
    email: Joi.string().email().required(),
    profilePicture: Joi.string().allow(null).optional() 
});

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(15).required(),
    email: Joi.string().email().required()
});

module.exports = { registerSchema, loginSchema };
