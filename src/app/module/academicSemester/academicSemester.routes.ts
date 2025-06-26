import express from 'express';
import AcademicSemesterControllers from './academicSemester.controller';
import validationRequest from '../../middleware/validateRequest';
import AcademicValidation from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationRequest(AcademicValidation.createAcademicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAcademicSemesters);

router.get('/:id', AcademicSemesterControllers.getSingleAcademicSemester);

router.patch(
  '/:id',
  validationRequest(AcademicValidation.updateAcademicSemesterValidationSchema),
  AcademicSemesterControllers.updateAcademicSemester,
);

const AcademicSemesterRoutes = router;
export default AcademicSemesterRoutes;
