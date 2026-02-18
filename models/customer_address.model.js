const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customer_address = sequelize.define("Address", {
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
    car_id: {
      type: DataTypes.INTEGER,
    },

    // customer_id: {
    //   type: DataTypes.INTEGER,
    // },
  });

  Customer_address.associate = (models) => {
    Customer_address.belongsTo(models.Car, {
      foreignKey: "car_id",
      as: "car",
    });
  };

  return Customer_address;
};
