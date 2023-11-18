import { student } from "./student.interface";
import { StudentModel } from "./student.modul";

const studentcreateIntoDB = async (student: student) => {
  const result = await StudentModel.create(student);
  return result;
};
const studentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const singlestudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentservise = {
  studentcreateIntoDB,
  studentFromDB,
  singlestudentFromDB,
};
