import { TAcademicDepartment } from './academicDepartment.interface';
import AcademicDepartment from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDB = async (departmentId: string) => {
  const result =
    await AcademicDepartment.findById(departmentId).populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  departmentId: string,
  payload: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(
    departmentId,
    payload,
    { new: true },
  );
  return result;
};

const deleteAcademicDepartmentIntoDB = async (departmentId: string) => {
  const result = await AcademicDepartment.findByIdAndDelete(departmentId);
  return result;
};

const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  deleteAcademicDepartmentIntoDB,
  updateAcademicDepartmentIntoDB,
};

export default AcademicDepartmentServices;
