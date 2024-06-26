const express = require("express");

const authController = require("../controllers/auth.controller");

const auth = express.Router();

auth.post("/register", authController.register);
auth.post("/login", authController.login);

module.exports = auth;
