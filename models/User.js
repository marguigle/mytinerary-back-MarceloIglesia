import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    photo: {
      type: String,
      default:
        "https://www.creativefabrica.com/wp-content/uploads/2021/09/09/User-avatar-profile-icon-Graphics-17068385-1-1-580x386.jpg",
    },
    age: { type: Number },
    password: { type: String, required: true },
    phone: { type: String }, // Cambiado a String para manejar mejor los números de teléfono
    country: { type: String },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);
export default User;
