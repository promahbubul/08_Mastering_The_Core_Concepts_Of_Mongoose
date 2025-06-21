import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .max(20, 'Password cannot be more then 20')
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
