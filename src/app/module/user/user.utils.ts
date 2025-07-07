import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import User from './user.model';

const findStudentLastId = async () => {
  const lastStudent = await User.findOne({ role: 'student' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent?.id : undefined;
};

// year semester 4 digit number
const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = '0';
  const lastStudentId = await findStudentLastId();
  const lastStudentIdSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentIdYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentSemesterYear = payload.year;

  // if(lastStudentId)
  if (
    lastStudentId &&
    lastStudentIdSemesterCode === currentSemesterCode &&
    lastStudentIdYear === currentSemesterYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
  // return '';
};

export default generateStudentId;
