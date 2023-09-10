const validator = (Schema) => (req, res, next) => {
  const validation = Schema.validate(
    /* req.body, */

    {
      name: req.body.name,
      email: req.body.email,
      photo: req.body.photo,
      password: req.body.password,
      /* country: req.body.country, */
      birth_date: req.body.birth_date,
      age: req.body.age,
      phone: req.body.phone,
    },
    { abortEarly: true }
  );
  if (validation.error) {
    console.log(validation);
    return res.json(validation.error);
  } else {
    return next();
  }
};
export default validator;
