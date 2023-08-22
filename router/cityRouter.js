import { Router } from "express";
import citiesController from "../controller/citiesController.js";

const cityRouter = Router();
const { getAllCities, getOneCity, createOneCity, updateCity, deleteCity } =
  citiesController;

cityRouter.get("/", getAllCities);
cityRouter.get("/:id", getOneCity);
cityRouter.post("/", createOneCity);
cityRouter.put("/:id", updateCity);
cityRouter.delete("/:id", deleteCity);

export default cityRouter;
