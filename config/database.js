// import mongoose from "mongoose";

// mongoose
//   .connect("mongodb+srv://marguigle:basededatos@cluster0.orvohzd.mongodb.net/")
//   .then(() => console.log("Database connected"))
//   .catch(() => console.log("Database connection failed"));

import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar variables de entorno desde un archivo .env
dotenv.config();

const dbURL = process.env.DATABASE_URL;

mongoose
  .connect(dbURL)
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection failed:", error));
