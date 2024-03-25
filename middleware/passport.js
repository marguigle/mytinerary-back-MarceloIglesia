import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

  secretOrKey: process.env.JWT_SECRET,
};

const fn = async (jwt_payload, done) => {
  try {
    const userInDb = await User.findOne({ email: jwt_payload.email });
    if (!userInDb) {
      return done(null, false);
    }
    return done(null, userInDb);
  } catch (error) {
    return done(error, false);
  }
};

export default passport.use(new Strategy(options, fn));
