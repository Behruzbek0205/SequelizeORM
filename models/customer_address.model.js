const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customer_address = sequelize.define("Car", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_index: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // customer_id: {
    //   type: DataTypes.INTEGER,
    // },
    // car_id: {
    //   type: DataTypes.INTEGER,
    // },
  });
  return Customer_address;
};
