const expess = require("express");
const route = expess.Router();
const customerController = require("../controller/customerController");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer boshqarish
 */

route.post("/createCustomer", customerController.createCustomer);

/**
 * @swagger
 * /customer/createCustomer:
 *   post:
 *     tags: [Customer]
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


route.get("/getCustomer", customerController.getCustomer)

/**
 * @swagger
 * /customer/getCustomer: 
 *   get:
 *     tags: [Customer]
 *     summary: Get all customer
 *     responses:
 *       201:
 *         description: List of all customers
 *       500:
 *         description: Interal input data
 */




module.exports = route;
