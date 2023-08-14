import cities from "../cities.js";

const citiesColtroller = {
  getAllCities: (req, res, next) => {
    response.json({
      response: cities,
      success: true,
      error: null,
    });
  },
  getOneCity: (req, res, next) => {
    let { nombre, capital } = req.params;
    const city = cities.find((city) => city.capital == capital);
    response.json({
      response: capital,
      success: true,
      error: null,
    });
  },
};

export default citiesColtroller;
