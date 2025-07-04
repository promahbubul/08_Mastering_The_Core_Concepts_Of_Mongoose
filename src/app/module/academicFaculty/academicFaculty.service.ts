import { TAcademicFaculty } from './academicFaculty.interface';
import AcademicFaculty from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAcademicFacultyFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (facultyId: string) => {
  const result = await AcademicFaculty.findById(facultyId);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  facultyId: string,
  payload: TAcademicFaculty,
) => {
  const result = await AcademicFaculty.findByIdAndUpdate(facultyId, payload, {
    new: true,
  });
  return result;
};

const deleteAcademicFacultyFromDB = async (facultyId: string) => {
  const result = await AcademicFaculty.findByIdAndDelete(facultyId);
  return result;
};

const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
  deleteAcademicFacultyFromDB,
};

export default AcademicFacultyServices;
