import express from 'express';
import AcademicFacultyController from './academicFaculty.controller';
import validationRequest from '../../middleware/validateRequest';
import AcademicFacultyValidation from './academicFaculty.validation';

const router = express.Router();

router.get('/', AcademicFacultyController.getAcademicFaculty);
router.get('/:facultyId', AcademicFacultyController.getSingleAcademicFaculty);
router.post(
  '/create-academic-faculty',
  validationRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.createAcademicFaculty,
);
router.patch(
  '/:facultyId',
  validationRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.updateAcademicFaculty,
);
router.delete(
  '/:facultyId',
  AcademicFacultyController.deleteAcademicFaculty,
);

const AcademicFacultyRoutes = router;

export default AcademicFacultyRoutes;
