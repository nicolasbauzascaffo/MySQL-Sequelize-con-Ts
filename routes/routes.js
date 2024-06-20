var express = require("express");
var routes = express.Router();
/* Express validator: */
var _a = require("../middlewares/validator"), validateNewUser = _a.validateNewUser, validateEmail = _a.validateEmail;
/* Validation Result */
var _b = require('../middlewares/validateResult'), validateResultNewUser = _b.validateResultNewUser, validateResultEmail = _b.validateResultEmail;
/* Controllers */
var _c = require('../middlewares/controllers'), createNewUser = _c.createNewUser, getAllUsers = _c.getAllUsers, changeUser = _c.changeUser;
/* Routes */
/********************************/
/* Get all users */
routes.get('/', getAllUsers);
/* Modify user */
routes.put('/modify', validateEmail, validateResultEmail, changeUser);
/* Create new user */
routes.post("/create", validateNewUser, validateResultNewUser, createNewUser);
module.exports = routes;
