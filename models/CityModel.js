import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    language: { type: String, required: true },
    description: { type: String },
    // created_by: { type: Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const CitiesModel = model("City", schema);
export default CitiesModel;
