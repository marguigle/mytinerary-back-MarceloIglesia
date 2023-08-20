import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://marguigle:basededatos@cluster0.orvohzd.mongodb.net/")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database connection failed"));
