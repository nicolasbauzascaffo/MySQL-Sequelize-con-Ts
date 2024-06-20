var validationResult = require("express-validator").validationResult;
exports.validateResultNewUser = function (req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            message: errors.array()[0].msg,
        });
    }
    else {
        next();
    }
};
exports.validateResultEmail = function (req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            message: errors.array()[0].msg,
        });
    }
    else {
        next();
    }
};
