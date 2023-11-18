import { Schema, model } from "mongoose";
import {
  Guardian,
  Localguardian,
  Username,
  student,
} from "./student.interface";

const UsernameSchema = new Schema<Username>({
  firstname: { type: String, required: true },
  middelname: { type: String },
  lastname: { type: String },
});

const GuardianSchema = new Schema<Guardian>({
  fathername: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fathercontactNo: { type: String, required: true },
  mothername: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  mothercontactNo: { type: String, required: true },
});

const LocalguardianSchema = new Schema<Localguardian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  Occupation: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<student>({
  id: { type: String },
  name: UsernameSchema,
  email: { type: String, required: true },
  gender: ["male", "female"],
  dateofBrith: { type: String },
  contactno: { type: String, required: true },
  emgcontactno: { type: String, required: true },
  boolgGrop: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: GuardianSchema,
  Localguardian: LocalguardianSchema,
  profileimg: { type: String },
  isActive: ["active", "blocked"],
});

export const StudentModel = model<Schema>("Student", studentSchema);
