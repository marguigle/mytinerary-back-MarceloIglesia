import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    photo: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUser-avatar.svg&psig=AOvVaw1EnTkwJHtyLo47E1sOdY0J&ust=1694218116990000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjvkIbdmYEDFQAAAAAdAAAAABAE",
    },
    age: { type: Number },
    password: { type: String, required: true },

    phone: { type: Number },
    country: { type: String },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);
export default User;
