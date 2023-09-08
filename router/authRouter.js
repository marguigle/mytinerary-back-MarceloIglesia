import { Router } from "express";
import authController from "../controller/authController.js";
import { signUpSchema } from "../validatorSchemas/signUpValidator.js";
import validator from "../middleware/validator.js";

const authRouter = Router();

const { singUp } = authController;

authRouter.post("/", validator(signUpSchema), singUp);

export default authRouter;
