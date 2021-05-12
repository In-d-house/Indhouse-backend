const createError = require("http-errors");

const Music = require("../../models/Music");
const Artist = require("../../models/Artist");
const Genre = require("../../models/Genre");

const createMusic = async (req, res, next) => {
  try {
    const { music } = req.body;
    let artist;
    let genre;

    artist = await Artist.findOne({ name: music.artist });
    genre = await Genre.findOne({ name: music.genre });

    const isExist = await Music.findOne({ title: music.title });

    if (isExist && JSON.stringify(isExist.artist) === JSON.stringify(artist._id)) {
      res
        .status(200)
        .json({ error: "이미 있는 음악입니다." });
      return;
    }

    if (!genre) {
      genre = await Genre.create({
        name: music.genre,
      });
    }

    if (!artist) {
      artist = await Artist.create({
        name: music.artist,
      });
    }

    await Music.create({
      ...music,
      artist: artist._id,
      genre: genre._id,
    });

    res
      .status(201)
      .json({ result: "success" });
  } catch {
    next(createError(400, "음악 생성에 실패 했습니다."));
  }
};

const uploadCoverPhoto = async (req, res, next) => {
  try {
    const { location } = req.file;

    res
      .status(201)
      .json({ result: "success", location });
  } catch {
    next(createError(400, "음악 커버 사진 업로드에 실패했습니다."));
  }
};

module.exports = {
  createMusic,
  uploadCoverPhoto,
};
