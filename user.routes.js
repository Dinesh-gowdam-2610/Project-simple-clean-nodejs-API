const express = require("express");
const { expressYupMiddleware } = require("express-yup-middleware");
// const userController = require("./controllers/user.controller");
const { getUser, addUser, updateUser, removeUser} = require("./user.schemas")

const router = express.Router();

// router.get("/all", userController.getAllUsers);

// router.get(
//   "/:id",
//   expressYupMiddleware({
//     schemaValidator: getUser,
//   }),
//   userController.getUser
// );

// router.post(
//   "/",
//   expressYupMiddleware({
//     schemaValidator: addUser,
//   }),
//   userController.addUser
// );

// router.put(
//   "/:id",
//   expressYupMiddleware({ schemaValidator: updateUser }),
//   userController.updateUser
// );

// router.delete(
//   "/:id",
//   expressYupMiddleware({ schemaValidator: removeUser }),
//   userController.removeUser
// );

module.exports = router;
