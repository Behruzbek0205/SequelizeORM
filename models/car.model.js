const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    discription: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING, allowNull: false },
    horsePower: { type: DataTypes.INTEGER, allowNull: false },
    carType: { type: String, required: true },
    charging: { type: String },
    weight: { type: Number, required: true },
    gasoline: { type: String, required: true },
    yearMachine: { type: String, required: true },
    price: { type: Number, required: true },
    seria: { type: String, required: true },
  });
};

