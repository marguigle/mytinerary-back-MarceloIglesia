import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.DB_URL;

mongoose
  .connect(dbURL)
  .then(() => console.log("Database connected"))
  .catch((error) => console.error("Database connection failed:", error));
