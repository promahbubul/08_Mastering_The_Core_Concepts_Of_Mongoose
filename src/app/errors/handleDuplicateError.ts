/* eslint-disable @typescript-eslint/no-explicit-any */
import { TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (error: any): TGenericErrorResponse => {
  const statusCode = 400;
  const errorSources = Object.values(error.keyValue).map((item: any) => {
    return {
      path: '',
      message: `${item} is already exist`,
    };
  });

  return {
    statusCode,
    message: 'Duplicate error',
    errorSources,
  };
};

export default handleDuplicateError;
