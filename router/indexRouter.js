import { Router } from "express";
import cityRouter from "./cityRouter.js";
import itineraryRouter from "./itineraryRouter.js";

const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("bienvenido a mi servidor en /api");
});

indexRouter.use("/cities", cityRouter);

indexRouter.use("/itineraries", itineraryRouter);

export default indexRouter;
