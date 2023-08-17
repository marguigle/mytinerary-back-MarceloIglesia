import mongoose from "mongoose";
import { Schema, model, Types } from "mongoose";

let collection = "cities";
let schema = new schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  lenguage: { type: String, required: true },

  description: { type: String, required: true },
});
