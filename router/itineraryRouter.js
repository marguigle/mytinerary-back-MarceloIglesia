import { Router } from "express";
import itineraryController from "../controller/itineraryController.js";

const itineraryRouter = Router();

const {
  getAllItineraries,
  getOneItinerary,
  createOneItinerary,
  updateItinerary, // Corregido el nombre de la función
  deleteItinerary, // Corregido el nombre de la función
} = itineraryController;

itineraryRouter.get("/", getAllItineraries);
itineraryRouter.get("/:id", getOneItinerary);
itineraryRouter.post("/", createOneItinerary);
itineraryRouter.put("/:id", updateItinerary); // Usando el nombre corregido
itineraryRouter.delete("/:id", deleteItinerary); // Usando el nombre corregido

export default itineraryRouter;
