// import express from 'express'
const express = require("express");
const router = express.Router();

const Auth = require("../common/Auth");

// import userController from '../controller/User.js'
const userController = require("../controller/User");

router.get("/", Auth.validate, Auth.adminGuard, userController.getUser);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.editUserById);
router.delete("/:id", userController.deleteUserById);
router.post("/login", userController.login);

// export default  router
module.exports = router;
