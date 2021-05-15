const express = require("express");
const musicController = require("./controllers/music.controller");
const { uploadMusicCoverPhoto } = require("./middlewares/uploadPhoto");
const verifyToken = require("./middlewares/authorization");

const router = express.Router();

router.get("/by-like-genre/:user_id", verifyToken, musicController.getMusicByLikeGenre);
router.get("/by-like-music/:user_id", verifyToken, musicController.getMusicByLikeMusic);
router.post("/", musicController.createMusic);
router.patch("/likeUser/:music_id/:user_id", musicController.updateLikeUser);
router.patch("/cover-photo", uploadMusicCoverPhoto, musicController.uploadCoverPhoto);

module.exports = router;
