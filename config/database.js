import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.DATABASE_URL;

mongoose
  .connect(dbURL)
  .then(() => console.log("Database connected OK"))
  .catch((error) =>
    console.error("Database connection failed: cagamos....!", error)
  );
