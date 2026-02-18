const Joi = require("joi");

const validateAddress = (customer_address) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    street: Joi.string().min(2).required(),
    house: Joi.string().min(2).required(),
    flat: Joi.number().min(1).required(),
    location: Joi.string().min(5).required(),
    post_index: Joi.string().min(2).required(),
    info: Joi.string().required(),
    // customer_id: Joi.number().required(),
    // car_id: Joi.number().required(),
  });
  return schema.validate(customer_address);
};

module.exports = { validateAddress };
