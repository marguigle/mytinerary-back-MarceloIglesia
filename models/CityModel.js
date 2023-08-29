import mongoose, { Schema, model, Types } from "mongoose";

const citySchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    language: { type: String, required: true },
    description: { type: String },
    itineraries: [{ type: Types.ObjectId, ref: "Itinerary" }],
  },

  {
    timestamps: true,
  }
);

const CitiesModel = model("City", citySchema);
export default CitiesModel;
