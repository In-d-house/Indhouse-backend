const createError = require("http-errors");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const User = require("../../models/User");

const { saltRound } = require("../../configs");

exports.signup = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .alphanum()
      .min(4)
      .max(15)
      .required(),

    email: Joi.string()
      .email()
      .required(),

    password: Joi.string()
      .min(6)
      .required(),
  });

  try {
    await schema.validateAsync(req.body);
  } catch {
    next(createError(400, "Joi Error"));
    return;
  }

  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      res
        .status(400)
        .json({ result: "exist email" });
      return;
    }

    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(password, salt);

    await User.create({
      name,
      email,
      password: hash,
    });

    res
      .status(201)
      .json({ result: "success" });
  } catch {
    next(createError(400));
  }
};
