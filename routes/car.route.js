const express = require("express");
const route = express.Router();
const carController = require("../controller/car.Controller");

/**
 * @swagger
 * tags:
 *   name: Car
 *   description: Moshinalarni boshqarish
 */

route.post("/createCar", carController.createCar);

/**
 * @swagger
 * /car/createCar:
 *   post:
 *     tags: [Car]
 *     summary: Create a new car
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                model:
 *                  type: string
 *                color:
 *                  type: string
 *                horsePower:
 *                  type: number
 *                carType:
 *                  type: string
 *                weight:
 *                  type: number
 *                gasoline:
 *                  type: string
 *                yearMachine:
 *                  type: number
 *                price:
 *                  type: number
 *                seria:
 *                  type: string
 *     responses:
 *       201:
 *         description: Car created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal input data
 */

route.get("/getCars", carController.getCars);

/**
 * @swagger
 * /car/getCars:
 *   get:
 *     tags: [Car]
 *     summary: Get all cars
 *     responses:
 *       201:
 *         description: List of all cars
 *       500:
 *         description: Internal input data
 */

route.get("/getCarById/:id", carController.getCarById);
/**
 * @swagger
 * /car/getCarById/{id}:
 *   get:
 *     summary: Carni ID orqali olish
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan car
 *       404:
 *         description: Car topilmadi
 */

route.put("/UpdateCar/:id", carController.UpdateCar);
/**
 * @swagger
 * /car/UpdateCar/{id}:
 *   put:
 *     summary: Car yangilash
 *     tags: [Car]
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
 *                title:
 *                  type: string
 *                model:
 *                  type: string
 *                color:
 *                  type: string
 *                horsePower:
 *                  type: number
 *                carType:
 *                  type: string
 *                weight:
 *                  type: number
 *                gasoline:
 *                  type: string
 *                yearMachine:
 *                  type: number
 *                price:
 *                  type: number
 *                seria:
 *                  type: string
 *     responses:
 *       200:
 *         description: Car yangilandi
 *       400:
 *         description: Validatsiya xatosi
 */

route.delete("/deleteCar/:id", carController.deleteCar);

/**
 * @swagger
 * /car/deleteCar/{id}:
 *   delete:
 *     summary: Car o‘chirish
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car o‘chirildi
 *       404:
 *         description: Car topilmadi
 */

route.get("/searchCar", carController.searchCar);

/**
 * @swagger
 * /car/searchCar:
 *   get:
 *     summary: Car qidirish
 *     tags: [Car]
 *     description: Car qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Qidiruv (title and yearMachine)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car topildi
 *       404:
 *         description: Car topilmadi
 *       500:
 *         description: Server xatosi
 */

module.exports = route;
