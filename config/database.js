import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://marguigle:basededatos@cluster0.orvohzd.mongodb.net/mytinerary-cities"
  )

  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("database conection failed");
  });
