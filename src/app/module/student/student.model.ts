/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import validator from 'validator';

import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  // TStudentMethods,
  // TStudentModel,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'First name cannot be more than 20 characters'],
    // validate: {
    //   // custom validation: without package
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not capitalized formate',
    // },
  },
  middleName: {
    type: String,
    required: [true, 'Middle Name is required'],
    // validate: {
    //   validator: (value) => validator.isAlpha(value), // npm : validator
    //   message: '{VALUE} is not valid',
    // },
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Guardian Father name is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Guardian Father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Guardian Father Contact number is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Guardian mother name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Guardian mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Guardian mother contact number is required'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: '',
    },
    name: {
      type: userNameSchema,
      required: [true, 'name field is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not valid',
      },
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: '{VALUE} is not valid',
      },
    },
    contactNo: {
      type: String,
      required: [true, 'Contact Number is required'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency number is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not valid',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present Address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent Address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian field is required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local Guardian is required'],
    },
    profileImag: {
      type: String,
      required: [true, 'Profile image is required'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// Query middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

studentSchema.statics.isUserExist = async (id: string) => {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// Creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

const Student = model<TStudent, StudentModel>('Student', studentSchema);

export default Student;
