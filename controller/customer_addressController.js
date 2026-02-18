const { Op } = require("sequelize");
const { Address, Carw } = require("../models");
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
      include: [{ model: Car, as: "car" }],
    });

    if (!customer_address)
      return res.status(404).json({ message: "Customer_address not found" });
    res.status(200).json(customer_address);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// update customer address

exports.updateCustomerAddress = async (req, res) => {
  try {
    const customer_address = await Address.findByPk(req.params.id);
    if (!customer_address)
      return res.status(404).json({ message: `Customer_address not found` });

    const { error } = validateAddress(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validatsiya xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    await customer_address.update(req.body);
    res
      .status(200)
      .json({ data: customer_address, message: `Updated successfully` });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  delete customer address
exports.deleteCustomerAddress = async (req, res) => {
  try {
    const customer_address = await Address.findByPk(req.params.id);
    if (!customer_address)
      return res.status(404).json({ message: `Customer_address not found` });
    await customer_address.destroy();
    res.status(200).json({
      data: customer_address,
      message: `Customer_address deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// search Customer_address

exports.searchAddress = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }
    const customer_address = await Address.findAll({
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${query}%` } }],
      },
    });
    res.status(200).send(customer_address);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
