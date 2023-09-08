import joi from "joi";
import JoiPwd from "joi-password-complexity";

export const signUpSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required().min(4).max(8),
  name: joi.string(),
  photo: joi.string().uri(),
  birth_date: joi.date.max(Date.now()),
  age: joi.number(),
  phone: joi.number(),
  verified: joi.boolean,
});
