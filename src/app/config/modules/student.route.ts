import express from "express";
import { studentcontoler } from "./student.contoler";

const route = express.Router();
route.post("/create-student", studentcontoler.creatStudent);
route.get("/", studentcontoler.getallStudent);
route.get("/:studentId", studentcontoler.getsingleStudent);
export const studentroute = route;
