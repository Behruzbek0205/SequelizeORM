const { Customer } = require("../models");
const { validateCustomer } = require("../validation/customerValidation");

exports.createCustomer = async (req, res) => {
  try {
    const { error } = validateCustomer(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    const customer = await Customer.create(req.body);
    res.status(201).json({
      success: true,
      message: "Xaridor muvaffaqiyatli yaratildi",
      data: customer,
    });
  } catch (err) {
    console.error("Server xatosi:", err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        success: false,
        message: "Bu email allaqachon mavjud",
      });
    }
    if (err.name === "SequelizeValidationError") {
      return res.status(400).json({
        success: false,
        message: "Malumotlar validatsiyadan otmadi",
        errors: err.errors.map((e) => e.message),
      });
    }
    res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: err.message,
    });
  }
};

// get customer
exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll({});
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// get by id customer

exports.CustomerUpdate = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ message: `Customer not found` });

    const { error } = validateCustomer(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validatsiya xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    await customer.update(req.body);
    res.status(200).json({ data: customer, message: `Updated successfully` });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};
