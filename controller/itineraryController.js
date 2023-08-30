import ItineraryModel from "../models/ItineraryModel.js";
import CityModel from "../models/CityModel.js";
const itineraryController = {
  getAllItineraries: async (req, res, next) => {
    try {
      const allItineraries = await ItineraryModel.find().populate("city");
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
    try {
      let cityQuery = {
        name: { $regex: req.body.city.trim(), $options: "i" },
      };

      let city = await CityModel.findOne(cityQuery);

      if (city) {
        let aux = { ...req.body };
        aux.city = city._id;
        const newItinerary = await ItineraryModel.create(aux);
        await CityModel.findOneAndUpdate(
          { _id: city._id },
          { $push: { itineraries: newItinerary._id } }
        );
        res.status(201).json(newItinerary);
      } else {
        res.status(404).json({
          message: " not found",
        });
      }
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
