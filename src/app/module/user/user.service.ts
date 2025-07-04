/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import Student from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import generateStudentId from './user.utils';
import AppError from '../../errors/AppError';
import status from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  const academicSemester = (await AcademicSemester.findById(
    payload.academicSemester,
  )) as TAcademicSemester;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    userData.id = await generateStudentId(academicSemester);

    // create a user (transaction - 1)
    const newUser = await User.create([userData], { session });

    // create a student
    if (!newUser.length) {
      throw new AppError(status.BAD_REQUEST, 'Failed to create user');
    }

    payload.id = newUser[0].id;
    payload.user = newUser[0]?._id;

    // Create a student (transaction -> 2)
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(status.BAD_REQUEST, 'Failed to create student');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw err;
  }
};

const UserServices = {
  createStudentIntoDB,
};

export default UserServices;
