import { Router } from "express";
import citiesController from "../controller/citiesController.js";

const { getAllCities, getOneCity } = citiesController;
const indexRouter = Router();

indexRouter.get("/api", (request, response, next) => {
  response.send("Bienvenido a mi servidor en /api");
});
indexRouter.get("/cities", getAllCities);
indexRouter.get("/cities/:name", getOneCity);

export default indexRouter;
