import User from "../models/user.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  try {
    const passwordHash = bcryptjs.hashSync(req.body.password, 10);
    console.log(passwordHash);
    req.body.password = passwordHash;

    const emailExiste = await User.findOne({ email: req.body.email });

    if (!emailExiste) {
      const newUser = await User.create(req.body);
      const esIgual = bcryptjs.compareSync(req.body.password, newUser.password);
      console.log(esIgual);

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
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userInDb = await User.findOne({ email });

    if (!userInDb) {
      return res.json({
        success: false,
        error: "incorrect email or password",
      });
    }

    const validPassword = bcryptjs.compareSync(password, userInDb.password);
    if (!validPassword) {
      return res.json({
        success: false,
        error: "incorrect email or password",
      });
    }

    const userResponse = {
      email: userInDb.email,
      name: userInDb.name,
      photo: userInDb.photo,
      id: userInDb._id,
    };

    return res.status(200).json({
      success: true,
      user: userResponse,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};
