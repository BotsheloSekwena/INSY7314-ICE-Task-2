// Input validation middleware using Joi
const Joi = require('joi');

// Define the validation schema for a gadget
// Each field has validation rules and custom error messages
const gadgetSchema = Joi.object({
  name: Joi.string().min(1).max(200).required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 1 character',
      'any.required': 'Name is required'
    }),
  brand: Joi.string().min(1).max(100).required()
    .messages({
      'string.empty': 'Brand is required',
      'any.required': 'Brand is required'
    }),
  price: Joi.number().positive().required()
    .messages({
      'number.base': 'Price must be a number',
      'number.positive': 'Price must be greater than 0',
      'any.required': 'Price is required'
    }),
  category: Joi.string().min(1).max(50).required()
    .messages({
      'string.empty': 'Category is required',
      'any.required': 'Category is required'
    }),
  stock: Joi.number().integer().min(0).required()
    .messages({
      'number.base': 'Stock must be a number',
      'number.integer': 'Stock must be a whole number',
      'number.min': 'Stock cannot be negative',
      'any.required': 'Stock is required'
    })
});

// Validation middleware
const validateGadget = (req, res, next) => {
  const { error, value } = gadgetSchema.validate(req.body, {
    abortEarly: false,  // Return all validation errors, not just the first
    stripUnknown: true  // Remove unknown fields from the request body
  });

  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));

    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors
    });
  }

  // Replace req.body with validated value
  req.body = value;
  next();
};

module.exports = validateGadget;