import ItineraryModel from "../models/ItineraryModel.js";
import CityModel from "../models/CityModel.js";
const itineraryController = {
  getAllItineraries: async (req, res, next) => {
    try {
      const allItineraries = await ItineraryModel.find();
      res.json({
        response: allItineraries,
        success: true,
        error: null,
      });
    } catch (error) {
      console.log(error);
      res.json({ response: null, success: false, error: error.message });
    }
  },

  getOneItinerary: async (req, res, next) => {
    try {
      const oneItinerary = await ItineraryModel.findById(req.params.id);
      res.json({
        response: oneItinerary,
        success: true,
        error: null,
      });
    } catch (error) {
      console.log(error);
      res.json({
        response: null,
        success: false,
        error: error,
      });
    }
  },

  createOneItinerary: async (req, res, next) => {
    let itinerary;
    let error = null;
    let success = true;

    try {
      const city = await CityModel.find({ city: req.body.city });
      const query = { ...req.body };
      query.city = query._id;
      itinerary = await ItineraryModel.create(query);
      res.status(201).json({
        response: itinerary,
        success: true,
        error: null,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        response: null,
        success: false,
        error: error,
      });
    }
  },

  updateItinerary: async (req, res, next) => {
    let itinerary;
    let error = null;
    let success = true;
    try {
      const { id } = req.params;
      itinerary = await ItineraryModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json({
        response: itinerary,
        error,
        success,
      });
    } catch (error) {
      res.json({
        response: null,
        success: false,
        error: error.message,
      });
    }
  },

  deleteItinerary: async (req, res, next) => {
    let itinerary;
    let error = null;
    let success = true;
    try {
      const { id } = req.params;
      itinerary = await ItineraryModel.findOneAndDelete({ _id: id }, req.body, {
        new: true,
      });
      res.json({
        response: itinerary,
        error,
        success,
      });
    } catch (error) {
      res.json({
        success: false,
        error: error.message,
      });
    }
  },
};

export default itineraryController;
