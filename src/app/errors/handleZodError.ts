import { ZodError } from "zod";
import { TErrorSources } from "../interface/error";

const handleZodError = (error: ZodError) => {
  const errorSources: TErrorSources = error.issues.map((issue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Zod validation error',
    errorSources,
  };
};

export default handleZodError;
