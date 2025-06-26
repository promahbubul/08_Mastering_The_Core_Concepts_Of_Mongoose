import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.const';
import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(AcademicSemesterName as [string, ...TAcademicSemesterName[]]),
    code: z.enum(AcademicSemesterCode as [string, ...TAcademicSemesterCode[]]),
    year: z.string(),
    startMonth: z.enum(Months as [string, ...TMonths[]]),
    endMonth: z.enum(Months as [string, ...TMonths[]]),
  }),
});
const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum(AcademicSemesterName as [string, ...TAcademicSemesterName[]])
      .optional(),
    code: z
      .enum(AcademicSemesterCode as [string, ...TAcademicSemesterCode[]])
      .optional(),
    year: z.string().optional(),
    startMonth: z.enum(Months as [string, ...TMonths[]]).optional(),
    endMonth: z.enum(Months as [string, ...TMonths[]]).optional(),
  }),
});

const AcademicValidation = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};

export default AcademicValidation;
