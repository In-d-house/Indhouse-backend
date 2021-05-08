const express = require("express");
const userController = require("./controllers/user.controller");

const router = express.Router();

router.post("/login/local", userController.localLogin);
router.post("/login/social", userController.socialLogin);
router.post("/signup", userController.signup);

module.exports = router;
