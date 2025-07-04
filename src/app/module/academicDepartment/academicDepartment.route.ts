import express from 'express';
import AcademicDepartmentControllers from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
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
