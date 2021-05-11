const Music = require("../../models/Music");

const uploadPhoto = (req, res, next) => {
  const photo = req.file;
  console.log("file", photo);
  res
    .status(201)
    .json({ photo });
};

module.exports = {
  uploadPhoto,
};
