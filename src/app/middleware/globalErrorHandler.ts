/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode ||    500;
  const message = error.message || 'Something went wrong';
  res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};

export default globalErrorHandler;
