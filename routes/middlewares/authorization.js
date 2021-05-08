const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const { jwtSecretKey } = require("../../configs");

exports.verifyToken = (req, res, next) => {
  try {
    const { userId } = req.params;
    const token = req.cookies("authoriazaion");

    const decodedUser = jwt.verify(token, jwtSecretKey);
    if (decodedUser._id !== userId) return next(createError(403));

    next();
  } catch {
    next(createError(401));
  }
};
