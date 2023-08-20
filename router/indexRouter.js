import { Router } from "express";
import cityArray from "../cityArray.js";
cityArray;
const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("bienvenido a mi servidor en /api");
});
indexRouter.get("/cities", (req, res, next) => {
  res.json({
    response: cityArray,
    succes: true,
    error: null,
  });
});

export default indexRouter;
