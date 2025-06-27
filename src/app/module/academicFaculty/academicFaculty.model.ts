import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const AcademicFaculty = model('AcademicFaculty', academicFacultySchema);

export default AcademicFaculty;
