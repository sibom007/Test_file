import { Request, Response } from "express";
import { studentservise } from "./student.servise";

const creatStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentdata } = req.body;

    const result = await studentservise.studentcreateIntoDB(studentdata);
    res.status(200).json({
      success: true,
      message: "student creat successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getallStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentservise.studentFromDB();
    res.status(200).json({
      success: true,
      message: "student get successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getsingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentservise.singlestudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "student get successfull",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentcontoler = {
  creatStudent,
  getallStudent,
  getsingleStudent,
};
