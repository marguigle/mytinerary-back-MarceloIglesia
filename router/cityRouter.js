import { Router } from "express";
import citiesController from "../controller/citiesController.js";
import cityArray from "../cityArray.js";
const cityRouter = Router(); // Usar cityRouter en lugar de indexRouter
const { getAllCities, getOneCity, createOneCity } = citiesController;

cityRouter.get("/", getAllCities);
cityRouter.post("/", createOneCity);
cityRouter.get("/:id", getOneCity);

export default cityRouter;
