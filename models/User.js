const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  photoUrl: {
    type: String,
    default: null,
  },
  likeMusic: [{
    musicId: { type: ObjectId, ref: "Music", required: true },
    createdAt: { type: String, required: true },
  }],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
