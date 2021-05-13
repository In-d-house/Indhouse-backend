const express = require("express");
const musicController = require("./controllers/music.controller");
const { uploadMusicCoverPhoto } = require("./middlewares/uploadPhoto");
const verifyToken = require("./middlewares/authorization");

const router = express.Router();

router.get("/recommendByGenre/:user_id", verifyToken, musicController.getRecommendMusicByGenre);
router.post("/", musicController.createMusic);
router.patch("/likeUser/:music_id/:user_id", musicController.updateLikeUser);
router.patch("/cover-photo", uploadMusicCoverPhoto, musicController.uploadCoverPhoto);

module.exports = router;
