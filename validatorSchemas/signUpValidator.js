import joi from "joi";
import JoiPwd from "joi-password-complexity";
const complexityOptions = {
  min: 8,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4,
};

export const signUpSchema = joi.object({
  email: joi.string().required(),
  password: JoiPwd(complexityOptions).required().min(4).max(8),
  name: joi.string(),
  photo: joi.string().uri(),
  birth_date: joi.date.max(Date.now()),
  age: joi.number().min(18),
  phone: joi.number(),
  verified: joi.boolean,
});