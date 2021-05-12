const createError = require("http-errors");

const Music = require("../../models/Music");

const uploadCoverPhoto = async (req, res, next) => {
  try {
    const { music_id } = req.params;
    const { location } = req.file;
    console.log("file", location);

    if (music_id) {
      await Music.findByIdAndUpdate(music_id, { coverPhotoUrl: location });
    }

    res
      .status(201)
      .json({ result: "success", location });
  } catch {
    next(createError(400, "음악 커버 사진 업로드에 실패했습니다."));
  }
};

module.exports = {
  uploadCoverPhoto,
};
