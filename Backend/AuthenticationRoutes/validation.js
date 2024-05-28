const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(15).required(),
    email: Joi.string().email().required(),
    profilePicture: Joi.string().allow(null).optional() // Assuming profilePicture is optional
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

module.exports = { registerSchema, loginSchema };
