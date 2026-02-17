const bcrypt = require("bcrypt")

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
    carType: { type: DataTypes.STRING, allowNull: false },
    charging: { type: DataTypes.STRING },
    weight: { type: DataTypes.INTEGER, allowNull: false },
    gasoline: { type: DataTypes.STRING, allowNull: false },
    yearMachine: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    seria: { type: DataTypes.STRING, allowNull: false },
  });

  Car.beforeSave(async (car, options) => {
    if (car.changed("seria")) {
      car.seria = await bcrypt.hash(car.seria, 10);
    }
  });
  return Car;
};
