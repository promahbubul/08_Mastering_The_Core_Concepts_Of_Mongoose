/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import UserServices from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendResponse(res, {
      success: true,
      message: 'Student created successfully',
      statusCode: status.OK,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const UserControllers = {
  createStudent,
};

export default UserControllers;
