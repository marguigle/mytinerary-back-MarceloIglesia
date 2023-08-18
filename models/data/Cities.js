import "dotenv/config.js";
import "../../config/database.js";
import CitiesModel from "../CityModel.js";

let ciudades = [
  {
    image: "../public/img/copenhagen-142711_1280.jpg",
    name: "Copenhagen Denmark",
    language: "Danish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },

  {
    image: "../public/img/dubai-2650364_1280.jpg",
    name: "Dubai, United Arab Emirates",
    language: "Arab",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/london-123785_1280.jpg",
    name: "London, England",
    language: "English",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/munich-1572429_1280.jpg",
    name: "Munich, Germany",
    language: "German",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/paris-100277_1280.jpg",
    name: "Paris, France",
    language: "French",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/imadrid.jpg",
    name: "Madrid, Spain",
    language: "Spanish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/washington-dc-85531_1280.jpg",
    name: "Washington, USA",
    language: "English",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/imadrid.jpg",
    name: "Madrid, Spain",
    language: "Spanish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/portugal-4828134_1280.jpg",
    name: "Lisbon, Portugal",
    language: "Portuguese",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },

  {
    image: "../public/img/venice-4756377_1280.jpg",
    name: "Venice, Italy",
    language: "Italian",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/barcelona.jpg",
    name: "Barcelona, Spain",
    language: "Spanish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    image: "../public/img/venice-2364149_1280.jpg",
    name: "Venice, Italy",
    language: "Italian",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
];
CitiesModel.insertMany(ciudades);
