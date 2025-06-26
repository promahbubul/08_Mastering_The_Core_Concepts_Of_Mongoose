import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import AcademicSemesterServices from './academicSemester.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AcademicSemesterServices.createAcademicSemesterInfoDB(
      req.body,
    );
    sendResponse(res, {
      success: true,
      message: 'Academic semester created successfully',
      statusCode: status.OK,
      data: result,
    });
  },
);

const getAcademicSemesters = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.getAcademicSemestersFromDB();
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Academic semesters retrieve successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await AcademicSemesterServices.getSingleAcademicSemesterFromDB(id);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Academic semester retrieve successfully',
      data: result,
    });
  },
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const semester = req.body;
    const { id } = req.params;
    const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
      id,
      semester,
    );

    sendResponse(res, {
      data: result,
      message: 'Academic semester update successfully',
      statusCode: status.OK,
      success: true,
    });
  },
);

const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};

export default AcademicSemesterControllers;
