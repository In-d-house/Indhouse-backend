const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: ObjectId,
    ref: "Artist",
    required: true,
  },
  genre: {
    type: ObjectId,
    ref: "Genre",
    required: true,
  },
  coverUrl: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("Music", musicSchema);
