const express = require("express");
const musicController = require("./controllers/music.controller");
const { uploadMusicCoverPhoto } = require("./middlewares/uploadPhoto");

const router = express.Router();

router.patch("/cover-photo/:user_id/:music_id", uploadMusicCoverPhoto, musicController.uploadCoverPhoto);

module.exports = router;
