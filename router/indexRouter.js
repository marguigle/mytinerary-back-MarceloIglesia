import { Router } from "express";
import citiesController from "../controller/citiesController.js";

const { getAllCities, getOneCity, updateOneCity, deleteOneCity } =
  citiesController;
const indexRouter = Router();

indexRouter.get("/api", (request, response, next) => {
  response.send("Bienvenido a mi servidor en /api");
});
indexRouter.get("/cities", getAllCities);
indexRouter.get("/cities/:id", getOneCity);
indexRouter.get("/cities/:id", updateOneCity);
indexRouter.get("/cities/:id", deleteOneCity);

export default indexRouter;
