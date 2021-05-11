const express = require("express");
const musicController = require("./controllers/music.controller");
const { uploadMusicCoverPhoto } = require("./middlewares/uploadPhoto");

const router = express.Router();

router.post("/cover-photo", uploadMusicCoverPhoto, musicController.uploadPhoto);

module.exports = router;
