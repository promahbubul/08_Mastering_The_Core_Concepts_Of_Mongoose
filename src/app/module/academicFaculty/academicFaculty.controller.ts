import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import AcademicFacultyServices from './academicFaculty.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const academicFaculty = req.body;
    const result =
      await AcademicFacultyServices.createAcademicFacultyIntoDB(
        academicFaculty,
      );
    sendResponse(res, {
      data: result,
      message: 'Academic faculty created successfully',
      statusCode: status.OK,
      success: true,
    });
  },
);

const getAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyServices.getAcademicFacultyFromDB();
  sendResponse(res, {
    data: result,
    message: 'Academic faculty retrieve successfully',
    statusCode: status.OK,
    success: true,
  });
});

const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const result =
      await AcademicFacultyServices.getSingleAcademicFacultyFromDB(facultyId);
    sendResponse(res, {
      data: result,
      message: 'Academic faculty retrieve successfully',
      statusCode: status.OK,
      success: true,
    });
  },
);

const deleteAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const result =
      await AcademicFacultyServices.deleteAcademicFacultyFromDB(facultyId);
    sendResponse(res, {
      data: result,
      message: 'Academic faculty deleted successfully',
      statusCode: status.OK,
      success: true,
    });
  },
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { facultyId } = req.params;
    const faculty = req.body;
    const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
      facultyId,
      faculty,
    );
    sendResponse(res, {
      data: result,
      message: 'Faculty updated successfully',
      statusCode: status.OK,
      success: true,
    });
  },
);

const AcademicFacultyController = {
  createAcademicFaculty,
  getAcademicFaculty,
  getSingleAcademicFaculty,
  deleteAcademicFaculty,
  updateAcademicFaculty
};

export default AcademicFacultyController;
