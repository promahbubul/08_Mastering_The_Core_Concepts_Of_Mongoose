import { model, Schema } from 'mongoose';
import { Gardian, LocalGuardian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  fristName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
});

const gardianSchema = new Schema<Gardian>({
  fatherName: {
    type: String,
    require: true,
  },
  fatherOccupation: {
    type: String,
    require: true,
  },
  fatherContactNo: {
    type: String,
    require: true,
  },
  motherName: {
    type: String,
    require: true,
  },
  motherOccupation: {
    type: String,
    require: true,
  },
  motherContactNo: {
    type: String,
    require: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    require: true,
  },
  occupation: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  contactNo: {
    type: String,
    require: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloogGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  gardian: gardianSchema,
  localGuardian: localGuardianSchema,
  profileImag: {
    type: String,
    required: true,
  },
  isActive: ['active', 'inactive'],
});

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
