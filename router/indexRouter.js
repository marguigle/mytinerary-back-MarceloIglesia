import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res, next) => {
  res.send("bienvenido a mi servidor en /api");
});
indexRouter.get("/cities", (req, res, next) => {
  res.send("Bienvenido a mi servidor en /cities");
});

export default indexRouter;
