import joi from "joi";
import JoiPwd from "joi-password-complexity";
const complexityOptions = {
  min: 4,
  max: 26,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 3,
};

export const signUpSchema = joi.object({
  email: joi.string().required().messages({
    "string.empty": "por favor ingrese su email",
    "any.required": "el email es requerido",
  }),
  password: JoiPwd(complexityOptions).required(),
  name: joi.string(),
  photo: joi.string(),

  age: joi.number().min(0),
  phone: joi.number(),
  country: joi.string(),
  verified: joi.boolean,
});
