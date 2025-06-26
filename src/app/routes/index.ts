import express from 'express';
import { StudentRoute } from '../module/student/student.route';
import { UserRoutes } from '../module/user/user.route';
import AcademicSemesterRoutes from '../module/academicSemester/academicSemester.routes';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
