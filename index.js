const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { sequelize } = require("./models");
const carRoute = require("./routes/car.route");
const userRoute = require("./routes/user.route");
const customerRoute = require("./routes/customer.route");
const setupSwagger = require("./swagger/Swagger");

dotenv.config();

const index = express();
const PORT = process.env.PORT || 5432;

index.use(express.json());
index.use(cors({ origin: "*" }));
index.use("/customer", customerRoute);
index.use("/api", userRoute);
index.use("/car", carRoute);

setupSwagger(index);

sequelize
  .sync()
  .then(() => {
    console.log(" Database ulandi");
    index.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("DB xatosi", err));
