import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import User from './user.model';

const findStudentLastId = async () => {
  const lastStudent = await User.findOne({ role: 'student' }, { _id: 0, id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent?.id.substring(6) : undefined;
};

// year semester 4 digit number
const generateStudentId = async (payload: TAcademicSemester) => {
  const currentId = (await findStudentLastId()) || (0).toString();
  let incrementId = (Number(currentId) + 1  ).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
  // return '';
};

export default generateStudentId;
