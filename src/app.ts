import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentroute } from "./app/config/modules/student.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/student", studentroute);

app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
