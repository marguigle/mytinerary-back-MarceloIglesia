import User from "../models/User,js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken";


export const signUp = async (req, res, next) => {
  try {
    const userInDb = await User.findOne({ email: req.body.email });
    //console.log(userInDb);
    const passwordHash = bcryptjs.hashSync(req.body.password, 10);
    console.log(passwordHash);
    req.body.password = passwordHash;

    if (!userInDb) {
      const newUser = await User.create(req.body);
      const userResponse = {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        photo: newUser.photo,
        age: newUser.age,
        password: newUser.password,

        phone: newUser.phone,
        country: newUser.country,
      };
      const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET);

      const esIgual = bcryptjs.compareSync(req.body.password, newUser.password);
      console.log(esIgual);

      return res.status(201).json({
        success: true,
        userData: userResponse,
        message: "signUp successfully",
        token: token,
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
    const token = jwt.sign(
      { email: userResponse.email },
      process.env.JWT_SECRET
    );
    return res.status(200).json({
      success: true,
      user: userResponse,
      token: token,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
};

export const signInToken = (req, res) => {
  console.log(req);

  const userResponse = {
    email: req.user.email,
    name: req.user.name,
    photo: req.user.photo,
    _id: req.user._id,
  };
  res.status(200).json({ success: true, user: userResponse });
};
