import { response } from "express";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";

const authController = {
  signUp: async (req, res, next) => {
    try {
      const passwordHash = bcryptjs.hashSync(req.body.password, 10);
      console.log(passwordHash);
      req.body.password = passwordHash;

      const emailExiste = await User.findOne({ email: req.body.email });

      if (!emailExiste) {
        const newUser = await User.create(req.body);
        return res.status(201).json({
          success: true,
          userData: newUser,
          message: "signUp successfully",
        });
      }
      return res.status(400).json({
        success: false,
        message: "email already exist",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export default authController;
