import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    guideImage: { type: String, required: false },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    hashtags: { type: String, required: true },
    likes: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const ItineraryModel = model("Itinerary", schema);

export default ItineraryModel;
