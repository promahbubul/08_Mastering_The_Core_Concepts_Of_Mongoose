import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleCastError = (
  error: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const statusCode = 400;
  const errorSources: TErrorSources = [
    {
      path: error.path,
      message: error.message,
    },
  ];
  return {
    statusCode,
    message: 'CastError',
    errorSources: errorSources,
  };
};

export default handleCastError;
