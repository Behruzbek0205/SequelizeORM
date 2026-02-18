const { Op } = require("sequelize");
const { Address } = require("../models");
const { validateAddress } = require("../validation/customer_addressValidation");

// Create Customer_address

exports.createCustomer_address = async (req, res) => {
  try {
    const { error } = validateAddress(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    const customer_address = await Address.create(req.body);
    res.status(201).json({
      success: true,
      message: "Customer_address muvaffaqiyatli yaratildi",
      data: customer_address,
    });
  } catch (err) {
    console.error("Server xatosi:", err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        success: false,
        message: "Bu malumot allaqachon mavjud",
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

// getCustomer_address

exports.getCustomer_address = async (req, res) => {
  try {
    const customer_address = await Address.findAll({});
    res.status(200).json(customer_address);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  get Customer_address by id

exports.getCustomerAddressById = async (req, res) => {
  try {
    const customer_address = await Address.findByPk(req.params.id, {
      //   include: [
      //     { model: Customer, as: "customer" },
      //     { model: Car, as: "car" },
      //   ],
    });
    if (!customer_address)
      return res.status(404).json({ message: "Customer_address not found" });
    res.status(200).json(customer_address);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};
