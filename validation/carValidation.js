const Joi = require("joi");

const validationCar = (car) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    model: Joi.string().required(),
    color: Joi.string().required(),
    horsePower: Joi.number().required(),
    carType: Joi.string().required(),
    weight: Joi.number().required(),
    gasoline: Joi.string().required(),
    yearMachine: Joi.integer().min(1980).required(),
    price: Joi.number().required(),
    seria: Joi.string().required(),
  });

  return schema.validate(car);
};

module.exports = { validationCar };
