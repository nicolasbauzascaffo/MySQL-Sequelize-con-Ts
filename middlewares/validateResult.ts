const { validationResult } = require("express-validator");

exports.validateResultNewUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      message: errors.array()[0].msg,
    });
  } else {
    next();
  }
};

exports.validateResultEmail = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      message: errors.array()[0].msg,
    });
  } else {
    next();
  }
};
