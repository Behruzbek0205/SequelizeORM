const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user.model")(sequelize, Sequelize.DataTypes);
const Customer = require("./customer.model")(sequelize, Sequelize.DataTypes);
const Car = require("./car.model")(sequelize, Sequelize.DataTypes);
const Address = require("./customer_address.model")(
  sequelize,
  Sequelize.DataTypes,
);

User.associate(sequelize.models);
Customer.associate(sequelize.models);
Car.associate(sequelize.models);

module.exports = {
  sequelize,
  Sequelize,
  User,
  Customer,
  Car,
  Address,
};
