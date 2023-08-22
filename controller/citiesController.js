import CityModel from "../models/CityModel.js";

const citiesController = {
  getAllCities: async (req, res, next) => {
    const query = {};
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" };
    }

    try {
      const allCities = await CityModel.find(query);
      res.json({
        response: allCities,
        succes: true,
        error: null,
      });
    } catch (error) {
      console.log(error);
      res.json({
        response: null,
        succes: false,
        error: error,
      });
    }
  },
  getOneCity: async (req, res, next) => {
    try {
      const oneCity = await CityModel.findById(req.params.id);
      res.json({
        response: oneCity,
        succes: true,
        error: null,
      });
    } catch (error) {
      console.log(error);
      res.json({
        response: null,
        succes: false,
        error: error,
      });
    }
  },

  createOneCity: async (req, res, next) => {
    console.log(req.body);
    let city;
    let error = null;
    let succes = true;

    try {
      city = await CityModel.create(req.body);
      console.log(city);
    } catch (error) {
      console.log(error);
      res.json({
        res: null,
        succes: false,
        error: error,
      });
    }
  },

  updateCity: async (req, res, next) => {
    let city;
    let error = null;
    let succes = true;

    try {
      const { id } = req.params;
      const city = await CityModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.json({
        response: city,
        error,
        succes,
      });
    } catch (error) {
      console.log(error);
      res.json({
        response: city,
        succes: false,
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
        error,
        succes,
      });
    } catch (error) {
      console.log(error);
      res.json({
        response: city,
        succes: false,
        error: error,
      });
    }

    res.send("ok");
  },
};
export default citiesController;
