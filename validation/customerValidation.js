const Joi = require("joi");

const validateCustomer = (customer) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(5).required(),
  });
  return schema.validate(customer);
};

module.exports = { validateCustomer };
