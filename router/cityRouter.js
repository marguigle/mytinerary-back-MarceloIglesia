import { Router } from "express";
import citiesController from "../controller/citiesController.js";

const cityRouter = Router();
const { getAllCities, getOneCity, createOneCity } = citiesController;

cityRouter.get("/", getAllCities);
cityRouter.get("/:id", getOneCity);
cityRouter.post("/", createOneCity);

export default cityRouter;
