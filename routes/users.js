const express = require("express");
const userController = require("./controllers/user.controller");
const { uploadUserPhoto } = require("./middlewares/uploadPhoto");
const verifyToken = require("./middlewares/authorization");

const router = express.Router();

router.patch("/profile/photo/:user_id", verifyToken, uploadUserPhoto, userController.editProfilePhoto);
router.patch("/profile/name/:user_id", verifyToken, userController.editProfileName);
router.patch("/profile/likeGenre/:user_id", verifyToken, userController.editLikeGenre);

module.exports = router;
