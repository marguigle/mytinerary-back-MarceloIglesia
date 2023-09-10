import { Router } from "express";
import { signUp, signIn } from "../controller/authController.js";
import { signUpSchema } from "../validatorSchemas/signUpValidator.js";
import validator from "../middleware/validator.js";

const authRouter = Router();

/* const { signUp, signIn } = authController; */

authRouter.post("/signup", validator(signUpSchema), signUp);
authRouter.post("/signin", validator(signUpSchema), signIn);

export default authRouter;
