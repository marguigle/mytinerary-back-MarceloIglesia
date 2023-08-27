import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    guideImage: { type: String, required: false },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    hashtags: { type: String, required: true },
    likes: { type: Number, required: false },
    city: { type: Schema.Types.ObjectId, ref: "city", required: true },
    //en city va el id de la ciudad porque un itinerario =>una ciudad
  },
  {
    timestamps: true,
  }
);

const ItineraryModel = model("Itinerary", schema);

export default ItineraryModel;