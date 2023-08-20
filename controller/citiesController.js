import cityArray from "../cityArray.js";

const citiesController = {
  getAllCities: (req, res, next) => {
    res.json({
      response: cityArray,
      succes: true,
      error: null,
    });
  },
  getOneCity: (req, res, next) => {
    console.log(req.params);
    let ciudad = cityArray.find((ciudad) => ciudad.id == req.params.id);
    res.json({
      response: ciudad,
      succes: true,
      error: null,
    });
  },
};
export default citiesController;
