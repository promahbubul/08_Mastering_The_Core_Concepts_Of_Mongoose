import { Model, Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImag?: string;
  academicSemester: Types.ObjectId;
  isDeleted: boolean;
};

// For creating static
export interface StudentModel extends Model<TStudent> {
  isUserExist(id: string): Promise<TStudent | null>;
}

// For creating instance
// export type TStudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type TStudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentMethods
// >;
