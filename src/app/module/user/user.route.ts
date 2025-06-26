import express from 'express';
import UserControllers from './user.controller';
import validationRequest from '../../middleware/validateRequest';
import { studentZodSchema } from '../student/student.zod.validation';

// initialization rout
const router = express.Router();

router.post(
  '/create-student',
  validationRequest(studentZodSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router