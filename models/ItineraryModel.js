import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    itinerary: { type: String, required: false },
    guideImage: { type: String, required: false },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    hashtags: { type: String, required: true },
    likes: { type: Number, required: false },
    city: { type: Types.ObjectId, ref: "City", required: true },
    //en city va el id de la ciudad porque un itinerario =>una ciudad
  },
  {
    timestamps: true,
  }
);

const ItineraryModel = model("Itinerary", schema);

export default ItineraryModel;
