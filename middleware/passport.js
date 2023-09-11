import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/user.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "clavetoken",
};

const fn = async (jwt_payload, done) => {
  try {
    const user = await User.findOne({ email: jwt_payload.email });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
};

export default passport.use(new Strategy(options, fn));
