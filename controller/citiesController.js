import cityArray from "../cities.js";

const citiesController = {
  getAllCities: async (req, res, next) => {
    let cities;
    let error = null;
    let success = true;
    try {
      cities = await cityArray.find((city) => city);

      res.json({
        res: cities,
        success: true,
        error: null,
      });
    } catch (err) {
      success = false;
      error = err;
      next(err);
    }
  },

  getOneCity: async (req, res, next) => {
    const { id, name } = req.params;
    name = req.body;
    id = req.body;

    try {
      let city = await cityArray.findById(id);
      res.json({
        res: city,
        success: true,
        error: null,
      });
    } catch {
      success = false;
      error = err;
      next(err);
    }
  },

  updateOneCity: async (req, res, next) => {},
  deleteOneCity: async (req, res, next) => {},
};

export default citiesController;

/*   let { name, image, description } = req.params;

  /*   const city = cityArray.find((city) => city.name == name);
  console.log(name); */
