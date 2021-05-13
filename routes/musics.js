const express = require("express");
const musicController = require("./controllers/music.controller");
const { uploadMusicCoverPhoto } = require("./middlewares/uploadPhoto");

const router = express.Router();

router.get("/", musicController.getAll);
router.post("/", musicController.createMusic);
router.patch("/cover-photo", uploadMusicCoverPhoto, musicController.uploadCoverPhoto);

module.exports = router;
