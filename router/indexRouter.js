import { Router } from "express";
import cityRouter from "./cityRouter.js";
const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("bienvenido a mi servidor en /api");
});

indexRouter.use("/cities", cityRouter);

export default indexRouter;
