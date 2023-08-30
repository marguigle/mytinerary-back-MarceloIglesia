import CityModel from "../models/CityModel.js";

const citiesController = {
  getAllCities: async (req, res, next) => {
    const query = {};
    if (req.query.name) {
      query.name = { $regex: `^${req.query.name}`, $options: "i" };
    }

    try {
      const allCities = await CityModel.find(query).populate("itineraries");
      res.json({
        response: allCities,
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
  getOneCity: async (req, res, next) => {
    try {
      const oneCity = await CityModel.findById(req.params.id);
      res.json({
        response: oneCity,
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

  createOneCity: async (req, res, next) => {
    let city;
    let error = null;
    let success = true;

    try {
      console.log(req.body);

      city = await CityModel.create(req.body);

      res.status(201).json({
        response: city,
        success,
        error,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        res: null,
        success: false,
        error: error,
      });
    }
  },

  updateCity: async (req, res, next) => {
    let error = null;
    let success = true;

    try {
      const { id } = req.params;
      const city = await CityModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json({
        response: city,
        error,
        success,
      });
    } catch (error) {
      console.log(error);
      res.json({
        response: error,
        success: false,
        error: error,
      });
    }
  },
  deleteCity: async (req, res, next) => {
    const { id } = req.params;
    try {
      const city = await CityModel.findOneAndDelete({ _id: id }, req.body, {});
      res.json({
        response: city,
        error: null,
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
      });
    }
  },
};
export default citiesController;
