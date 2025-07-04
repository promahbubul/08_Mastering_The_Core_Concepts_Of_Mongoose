import express from 'express';
import { StudentRoute } from '../module/student/student.route';
import { UserRoutes } from '../module/user/user.route';
import AcademicSemesterRoutes from '../module/academicSemester/academicSemester.routes';
import AcademicFacultyRoutes from '../module/academicFaculty/academicFaculty.route';
import AcademicDepartmentRoute from '../module/academicDepartment/academicDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoute,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
