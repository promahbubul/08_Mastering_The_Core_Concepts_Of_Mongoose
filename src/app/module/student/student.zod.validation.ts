import { z } from 'zod';

// User Name
const userNameZodSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-zA-Z]*$/),
  middleName: z.string().regex(/^[A-Za-z]+$/),
  lastName: z.string(),
});

// Guardian
const guardianZodSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string().regex(/^[0-9]+$/),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string().regex(/^[0-9]+$/),
});

// Local Guardian
const localGuardianZodSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  address: z.string(),
  contactNo: z.string().regex(/^[0-9]+$/),
});

// Main Student Schema
export const studentZodSchema = z.object({
  id: z.string(),
  password: z.string(),
  name: userNameZodSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string().regex(/^[0-9]+$/),
  emergencyContactNo: z.string().regex(/^[0-9]+$/),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianZodSchema,
  localGuardian: localGuardianZodSchema,
  profileImag: z.string(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentZodSchema;
