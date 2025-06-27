import { z } from 'zod';

// User Name
const userNameZodSchema = z.object({
  firstName: z.string().trim().max(20),
  middleName: z.string(),
  lastName: z.string(),
});

// Guardian
const guardianZodSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Local Guardian
const localGuardianZodSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  address: z.string(),
  contactNo: z.string(),
});

// Main Student Schema
export const studentZodSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: userNameZodSchema,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianZodSchema,
      localGuardian: localGuardianZodSchema,
      profileImag: z.string(),
      academicSemester: z.string(),
    }),
  }),
});

export const studentValidationSchemas = {
  studentZodSchema,
};
