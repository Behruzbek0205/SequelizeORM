const {Op} = require("sequelize")
const {Car} = require("../models")
const {validateCar} = require("../validation/carValidation")


exports.createCar = async (req, res) => {
  try {
    const { error } = validateCar(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    const car = await Car.create(req.body);
    res.status(201).json({
      success: true,
      message: "Car muvaffaqiyatli yaratildi",
      data: car,
    });
  } catch (err) {
    console.error("Server xatosi:", err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        success: false,
        message: "Bu car allaqachon mavjud",
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
