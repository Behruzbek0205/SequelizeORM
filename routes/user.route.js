const expess = require("express");
const route = expess.Router();
const userController = require("../controller/user.Controller");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

route.post("/createUser", userController.createUser);

/**
 * @swagger
 * /api/createUser:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
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
 *                password:
 *                  type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal input data
 */

route.get("/getUser", userController.getUser);

/**
 * @swagger
 * /api/getUser:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     responses:
 *       201:
 *         description: List of all users
 *       500:
 *         description: Internal input data
 */

route.get("/getUserById/:id", userController.getUserById);
/**
 * @swagger
 * /api/getUserById/{id}:
 *   get:
 *     summary: Userni ID orqali olish
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topilgan User
 *       404:
 *         description: User topilmadi
 */

route.put("/UpdateUser/:id", userController.UpdateUser);
/**
 * @swagger
 * /api/UpdateUser/{id}:
 *   put:
 *     summary: User yangilash
 *     tags: [Users]
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
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: User yangilandi
 *       400:
 *         description: Validatsiya xatosi
 */

route.delete("/UserDeleteById/:id", userController.UserDeleteById);

/**
 * @swagger
 * /api/UserDeleteById/{id}:
 *   delete:
 *     summary: House o‘chirish
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User o‘chirildi
 *       404:
 *         description: User topilmadi
 */

route.get("/searchUsers", userController.searchUsers);

/**
 * @swagger
 * /api/searchUsers:
 *   get:
 *     summary: User qidirish
 *     tags: [Users]
 *     description: User qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Qidiruv (name and email)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User topildi
 *       404:
 *         description: User topilmadi
 *       500:
 *         description: Server xatosi
 */

module.exports = route;
