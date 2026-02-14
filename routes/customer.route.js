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

route.get("/getCustomer", customerController.getCustomer);

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

route.get("/getCustomerById/:id", customerController.getCustomerById);
/**
 * @swagger
 * /customer/getCustomerById/{id}:
 *   get:
 *     summary: Customer ID orqali olish
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan customer
 *       404:
 *         description: Customer topilmadi
 */

route.put("/CustomerUpdate/:id", customerController.CustomerUpdate);
/**
 * @swagger
 * /customer/CustomerUpdate/{id}:
 *   put:
 *     summary: Customer yangilash
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                address:
 *                  type: string
 *     responses:
 *       200:
 *         description: Customer yangilandi
 *       400:
 *         description: Validatsiya xatosi
 */

route.delete("/deleteCustomer/:id", customerController.deleteCustomer);

/**
 * @swagger
 * /customer/deleteCustomer/{id}:
 *   delete:
 *     summary: Customer o‘chirish
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer o‘chirildi
 *       404:
 *         description: Customerer topilmadi
 */

route.get("/searchCustomer", customerController.searchCustomer)

/**
 * @swagger
 * /customer/searchCustomer:
 *   get:
 *     summary: Customer qidirish
 *     tags: [Customer]
 *     description: Customer qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Qidiruv (name and email)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer topildi
 *       404:
 *         description: Customer topilmadi
 *       500:
 *         description: Server xatosi
 */


module.exports = route;
