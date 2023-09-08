import { Router } from "express";
import authController from "../controller/authController.js";

const authRouter = Router();
const { singUp } = authController;

authRouter.post("/", singUp);

export default authRouter;
