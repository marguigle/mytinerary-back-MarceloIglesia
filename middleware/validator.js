import { signUpSchema } from "../validatorSchemas/signUpValidator.js";

const validator = (Schema) => (req, res, next) => {
  const validation = Schema.signUpSchema.validate(
    {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      photo: req.body.photo,
      birth_date: req.body.birth_date,
      age: req.body.age,
      phone: req.body.phone,
    },
    { abortEarly: true }
  );
  if (validation.error) {
    console.log(validation);
    return;
  } else {
    return next();
  }
};
export default validator;
