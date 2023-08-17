import cityArray from "../cities.js";

const citiesController = {
  getAllCities: (req, res, next) => {
    res.json({
      res: cityArray,
      success: true,
      error: null,
    });
  },
  /*   let { name, image, description } = req.params;

    /*   const city = cityArray.find((city) => city.name == name);
    console.log(name); */

  getOneCity: (req, res, next) => {
    const { name } = req.params;
    let city = cityArray.find((city) => city.name == name);
    res.json({
      res: city,
      success: true,
      error: null,
    });
  },
};

export default citiesController;
