import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    itinerary: { type: String, required: false },
    guideImage: { type: String, required: false },
    guideName: { type: String, required: false },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    hashtags: { type: String, required: true },
    likes: { type: Number, required: false },
    city: { type: Types.ObjectId, ref: "City", required: true },
  },
  {
    timestamps: true,
  }
);

const ItineraryModel = model("Itinerary", schema);

export default ItineraryModel;
