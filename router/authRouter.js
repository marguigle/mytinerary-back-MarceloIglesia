import { Router } from "express";
import { signUp, signIn, signInToken } from "../controller/authController.js";
import { signUpSchema } from "../validatorSchemas/signUpValidator.js";
import validator from "../middleware/validator.js";
import passport from "../middleware/passport.js";

const authRouter = Router();

/* const { signUp, signIn } = authController; */

authRouter.post("/signup", validator(signUpSchema), signUp);
authRouter.post("/signin", validator(signUpSchema), signIn);
authRouter.post(
  "/signin/token",
  passport.authenticate("jwt", { session: false }),
  signInToken
);
export default authRouter;
