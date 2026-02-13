const expess = require("express");
const route = expess.Router();
const customerController = require("../controller/customerController");


/**
 * @swagger
 * tags:
 *   name: Cusotmer
 *   description: Cusotmer boshqarish
 */

route.post("/createCustomer",customerController.createCustomer)

/**
 * @swagger
 * /api/createCustomer:
 *   post:
 *     tags: [Cusotmer]
 *     summary: Create a new customer
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal input data
 */

module.exports = route