/* import cityArray from "../cityArray.js"; */
import CityModel from "../models/CityModel.js";

const citiesController = {
  getAllCities: async (req, res, next) => {
    try {
      const allCities = await CityModel.find();
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
    console.log(req.params);
    let { id } = req.params;
    console.log(id);
    try {
      const oneCities = await CityModel.findById(id);
      res.json({
        response: oneCities,
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

  /*  let ciudad = CityModel.find((ciudad) => ciudad.id == req. params.id);*/
  /*     res.json({
    response: ciudad, 
      succes: true,
      error: null,
    });  */

  createOneCity: async (req, res, next) => {
    console.log(req.body);
    let city;
    let error = null;
    let succes = true;

    try {
      city = await CityModel.create(req.body);
      console.log(city);
      /*     /*   res.json({
        res: city,
        succes: true,
        error: null, 
      }); */
    } catch (error) {
      console.log(error);
      res.json({
        res: null,
        succes: false,
        error: error,
      });
    }
  },
};
export default citiesController;
