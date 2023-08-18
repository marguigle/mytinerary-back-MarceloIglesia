import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    language: { type: String, required: true }, // Corregido "lenguage" a "language"
    description: { type: String, required: true },
    created_by: { type: Types.ObjectId, ref: "User" }, // Reemplazado "" con el nombre de modelo correcto
  },
  {
    timestamps: true,
  }
);

const CitiesModel = model("City", schema); // Cambiado "collection" por "City"
export default CitiesModel; // Cambiado "Category" por "Cities"
