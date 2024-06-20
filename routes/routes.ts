const express = require("express");
const routes = express.Router();

/* Express validator: */
const { validateNewUser,validateEmail } = require("../middlewares/validator");
/* Validation Result */
const { validateResultNewUser,validateResultEmail } = require('../middlewares/validateResult')
/* Controllers */
const { createNewUser,getAllUsers,changeUser } = require('../middlewares/controllers')

/* Routes */
/********************************/
/* Get all users */
routes.get('/',getAllUsers)
/* Modify user */
routes.put('/modify',validateEmail,validateResultEmail,changeUser)

/* Create new user */
routes.post("/create", validateNewUser,validateResultNewUser,createNewUser);

module.exports = routes;
