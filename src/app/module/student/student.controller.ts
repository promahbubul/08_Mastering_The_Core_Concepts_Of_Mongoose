/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
// import studentJoiSchema from './student.joivalidation'; // joi validation
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponse(res, {
    success: true,
    message: 'Students retrieve successfully',
    statusCode: status.OK,
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentsFromDB(studentId);
  sendResponse(res, {
    success: true,
    message: 'Student retrieve successfully',
    statusCode: status.OK,
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);

  sendResponse(res, {
    success: true,
    message: 'Student deleted successfully',
    statusCode: status.OK,
    data: result,
  });
});
const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId, student);

  sendResponse(res, {
    success: true,
    message: 'Student updated successfully',
    statusCode: status.OK,
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
