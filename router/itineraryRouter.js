import { Router } from "express";
import itineraryController from "../controller/itineraryController.js";

const itineraryRouter = Router();

const {
  getAllItineraries,
  getOneItinerary,
  createOneItinerary,
  updateItinerary,
  deleteItinerary,
} = itineraryController;

itineraryRouter.get("/", getAllItineraries);
itineraryRouter.get("/:id", getOneItinerary);
itineraryRouter.post("/", createOneItinerary);
itineraryRouter.put("/:id", updateItinerary);
itineraryRouter.delete("/:id", deleteItinerary);

export default itineraryRouter;
