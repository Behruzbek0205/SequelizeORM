const { Op } = require("sequelize");
const { Car } = require("../models");
const { validateCar } = require("../validation/carValidation");

// CreateCar

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

//  getCars

exports.getCars = async (req, res) => {
  try {
    const car = await Car.findAll({});
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  getCar by id

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id, {});
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  update car

exports.UpdateCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ message: `Car topolmadi maraz` });

    const { error } = validateCar(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validatsiya xatosi",
        errors: error.details.map((err) => err.message),
      });
    }
    await car.update(req.body);
    res.status(200).json({ data: car, message: `Ozgardi` });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

//  delete car

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).json({ message: `Car not found` });

    await car.destroy();
    res.status(200).json({ data: car, message: `Car deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// search car

exports.searchCar = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }
    const car = await Car.findAll({
      where: {
        [Op.or]: [{ title: { [Op.like]: `%${query}%` } }],
      },
    });
    res.status(200).send(car);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
