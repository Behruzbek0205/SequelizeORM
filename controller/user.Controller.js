const { Op } = require("sequelize");
const { User, Customer, Car } = require("../models");

const { validateUser } = require("../validation/userValidation");

exports.createUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "Foydalanuvchi muvaffaqiyatli yaratildi",
      data: user,
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

// get

exports.getUser = async (req, res) => {
  try {
    const user = await User.findAll({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  get by id

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" },
        { model: Car, as: "car" },
      ],
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  update user

exports.UpdateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: `User not found` });

    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validatsiya xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    await user.update(req.body);
    res.status(200).json({ data: user, message: `Updated successfully` });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  delete user

exports.UserDeleteById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: `User not found` });

    await user.destroy();
    res.status(200).json({ data: user, message: `User deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// search user

exports.searchUsers = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }
    const users = await User.findAll({
      where: {
        [Op.or]: [{ name: { [Op.like]: `%${query}%` } }],
      },
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//  user car model yozib va carni userga ulash kerak
// car_id userda bolishi kerak
