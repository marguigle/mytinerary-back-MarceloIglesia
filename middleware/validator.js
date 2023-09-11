const validator = (Schema) => (req, res, next) => {
  const validation = Schema.validate(
    {
      name: req.body.name,
      email: req.body.email,
      photo: req.body.photo,
      age: req.body.age,
      password: req.body.password,
      phone: req.body.phone,
      country: req.body.country,
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
