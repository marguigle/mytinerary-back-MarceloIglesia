import { Router } from "express";
import authController from "../controller/authController.js";
import { signUpSchema } from "../validatorSchemas/signUpValidator.js";
import validator from "../middleware/validator.js";

const authRouter = Router();

const { signUp } = authController;

authRouter.post("/", validator(signUpSchema), signUp);

export default authRouter;
