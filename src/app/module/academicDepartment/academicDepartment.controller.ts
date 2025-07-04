import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import AcademicDepartmentServices from './academicDepartment.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const department = req.body;
    const result =
      await AcademicDepartmentServices.createAcademicDepartmentIntoDB(
        department,
      );
    sendResponse(res, {
      success: false,
      statusCode: status.OK,
      message: 'Academic department created successfully',
      data: result,
    });
  },
);
const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Academic departments retrieved successfully',
      data: result,
    });
  },
);
const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
        departmentId,
      );
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Academic department retrieved successfully',
      data: result,
    });
  },
);
const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const department = req.body;
    const result =
      await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
        departmentId,
        department,
      );
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Academic department updated successfully',
      data: result,
    });
  },
);
const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentServices.deleteAcademicDepartmentIntoDB(
        departmentId,
      );
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Academic department deleted successfully',
      data: result,
    });
  },
);

const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
};

export default AcademicDepartmentControllers;
