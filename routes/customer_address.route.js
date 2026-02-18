const express = require("express");
const route = express.Router();
const addressController = require("../controller/customer_addressController");

/**
 * @swagger
 * tags:
 *   name: Customer_address
 *   description: Customer_address boshqarish
 */

route.post("/createCustomer_address", addressController.createCustomer_address);

/**
 * @swagger
 * /address/createCustomer_address:
 *   post:
 *     tags: [Customer_address]
 *     summary: Create a new customer_address
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                street:
 *                  type: string
 *                house:
 *                  type: string
 *                flat:
 *                  type: integer
 *                location:
 *                  type: string
 *                post_index:
 *                  type: string
 *                info:
 *                  type: string
 *                car_id:
 *                  type: integer
 *     responses:
 *       201:
 *         description: Customer_address created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal input data
 */

route.get("/getCustomer_address", addressController.getCustomer_address);
/**
 * @swagger
 * /address/getCustomer_address:
 *   get:
 *     tags: [Customer_address]
 *     summary: Get all customer_address
 *     responses:
 *       201:
 *         description: List of all customer_address
 *       500:
 *         description: Internal input data
 */

route.get(
  "/getCustomerAddressById/:id",
  addressController.getCustomerAddressById,
);

/**
 * @swagger
 * /address/getCustomerAddressById/{id}:
 *   get:
 *     summary: Customer_address ID orqali olish
 *     tags: [Customer_address]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan customer_address
 *       404:
 *         description: Customer_address topilmadi
 */

route.put(
  "/updateCustomerAddress/:id",
  addressController.updateCustomerAddress,
);

/**
 * @swagger
 * /address/updateCustomerAddress/{id}:
 *   put:
 *     summary: Customer_address yangilash
 *     tags: [Customer_address]
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
 *                street:
 *                  type: string
 *                house:
 *                  type: string
 *                flat:
 *                  type: integer
 *                location:
 *                  type: string
 *                post_index:
 *                  type: string
 *                info:
 *                  type: string
 *     responses:
 *       200:
 *         description: Customer_address yangilandi
 *       400:
 *         description: Validatsiya xatosi
 */

route.delete(
  "/deleteCustomerAddress/:id",
  addressController.deleteCustomerAddress,
);

/**
 * @swagger
 * /address/deleteCustomerAddress/{id}:
 *   delete:
 *     summary: Customer_address o‘chirish
 *     tags: [Customer_address]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer_address o‘chirildi
 *       404:
 *         description: Customer_address topilmadi
 */

route.get("/searchAddress", addressController.searchAddress);

/**
 * @swagger
 * /address/searchAddress:
 *   get:
 *     summary: Customer_address qidirish
 *     tags: [Customer_address]
 *     description: Customer_address qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Qidiruv (name)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer_address topildi
 *       404:
 *         description: Customer_address topilmadi
 *       500:
 *         description: Server xatosi
 */

module.exports = route;
