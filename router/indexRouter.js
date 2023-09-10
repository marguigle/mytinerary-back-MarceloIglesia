import { Router } from "express";
import cityRouter from "./cityRouter.js";
import itineraryRouter from "./itineraryRouter.js";
import authRouter from "./authRouter.js";
const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("bienvenido a mi servidor en /api");
});

indexRouter.use("/cities", cityRouter);
indexRouter.use("/itineraries", itineraryRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
