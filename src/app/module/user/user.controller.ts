/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import UserServices from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { password, student: studentData } = req.body;
  const result = await UserServices.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    success: true,
    message: 'Student created successfully',
    statusCode: status.OK,
    data: result,
  });
});

const UserControllers = {
  createStudent,
};

export default UserControllers;
