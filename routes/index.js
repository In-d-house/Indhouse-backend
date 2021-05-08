const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome In-d house");
});

module.exports = router;
