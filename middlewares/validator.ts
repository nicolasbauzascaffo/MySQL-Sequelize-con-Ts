const { body, param } = require("express-validator");

exports.validateNewUser = [
  body("email")
    .notEmpty()
    .withMessage("La cadena no debe estar vacía")
    .isString()
    .withMessage("Debe ser un string!")
    .isLength({ max: 20 })
    .withMessage("Máximo 20 caracteres"),
  body("name")
    .notEmpty()
    .withMessage("Debe escribir nombre")
    .isString()
    .withMessage("Debe ser un string!"),
  body("password")
    .notEmpty()
    .withMessage("Debe escribir contraseña")
    .isString()
    .withMessage("Debe ser un string!"),
];

exports.validateEmail = [
  body("email")
    .notEmpty()
    .withMessage("La cadena no debe estar vacía")
    .isEmail()
    .withMessage("Debe ser un email!")
    .isString()
    .withMessage("Debe ser un string!")
];
