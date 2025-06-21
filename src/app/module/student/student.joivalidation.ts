import Joi from 'joi';

// creating a schema validation using Joi
const userNameJoiSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-zA-Z]*$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid first name',
      'string.max': 'Too long',
      'string.empty': 'Required',
    }),

  middleName: Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid middle name',
      'string.empty': 'Required',
    }),

  lastName: Joi.string().required().messages({
    'string.empty': 'Required',
  }),
});

// Guardian Schema
const guardianJoiSchema = Joi.object({
  fatherName: Joi.string().required().messages({ 'string.empty': 'Required' }),
  fatherOccupation: Joi.string()
    .required()
    .messages({ 'string.empty': 'Required' }),
  fatherContactNo: Joi.string()
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid number',
      'string.empty': 'Required',
    }),
  motherName: Joi.string().required().messages({ 'string.empty': 'Required' }),
  motherOccupation: Joi.string()
    .required()
    .messages({ 'string.empty': 'Required' }),
  motherContactNo: Joi.string()
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid number',
      'string.empty': 'Required',
    }),
});

// Local Guardian Schema
const localGuardianJoiSchema = Joi.object({
  name: Joi.string().required().messages({ 'string.empty': 'Required' }),
  occupation: Joi.string().required().messages({ 'string.empty': 'Required' }),
  address: Joi.string().required().messages({ 'string.empty': 'Required' }),
  contactNo: Joi.string()
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid number',
      'string.empty': 'Required',
    }),
});

// Student Schema
const studentJoiSchema = Joi.object({
  id: Joi.string(),

  name: userNameJoiSchema.required().messages({ 'any.required': 'Required' }),

  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': 'Invalid',
    'string.empty': 'Required',
  }),

  dateOfBirth: Joi.string().required().messages({ 'string.empty': 'Required' }),

  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email',
    'string.empty': 'Required',
  }),

  contactNo: Joi.string()
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid',
      'string.empty': 'Required',
    }),

  emergencyContactNo: Joi.string()
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid',
      'string.empty': 'Required',
    }),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({ 'any.only': 'Invalid' }),

  presentAddress: Joi.string()
    .required()
    .messages({ 'string.empty': 'Required' }),

  permanentAddress: Joi.string()
    .required()
    .messages({ 'string.empty': 'Required' }),

  guardian: guardianJoiSchema
    .required()
    .messages({ 'any.required': 'Required' }),

  localGuardian: localGuardianJoiSchema
    .required()
    .messages({ 'any.required': 'Required' }),

  profileImag: Joi.string().required().messages({ 'string.empty': 'Required' }),
  isActive: Joi.string()
    .valid('active', 'inactive')
    .default('active')
    .messages({
      'any.only': 'Invalid',
    }),
});

export default studentJoiSchema;
