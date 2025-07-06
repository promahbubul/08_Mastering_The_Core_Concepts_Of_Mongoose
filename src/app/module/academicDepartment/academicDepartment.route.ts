import express from 'express';
import AcademicDepartmentControllers from './academicDepartment.controller';
import validationRequest from '../../middleware/validateRequest';
import AcademicDepartmentValidation from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-academic-department',
  validationRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidation,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);
router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);
router.patch(
  '/:departmentId',
  AcademicDepartmentControllers.updateAcademicDepartment,
);
router.delete(
  '/:departmentId',
  AcademicDepartmentControllers.deleteAcademicDepartment,
);

const AcademicDepartmentRoute = router;
export default AcademicDepartmentRoute;
