const express = require("express")
const route = express.Router();
const carController = require("../controller/car.Controller") 


/**
 * @swagger
 * tags:
 *   name: Car
 *   description: Moshinalarni boshqarish
 */

route.post("/createCar", carController.createCar)


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




module.exports = route

//  *                customer_id:
//  *                  type: integer