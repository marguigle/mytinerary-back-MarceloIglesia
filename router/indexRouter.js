import { Router } from "express";

import citiesColtroller from "../controller/citiesController.js";
const { getAllCities, getOneCity } = citiesColtroller;
const indexRouter = Router();

indexRouter.get("/", (request, response, next) => {
  response.send("Bienvenido a mi servidor en /api");
});
indexRouter.get("/cities", getAllCities);
indexRouter.get("/cities/:capital", getOneCity);

export default indexRouter;
