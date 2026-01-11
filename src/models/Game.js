const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: String,
  price: Number,
  s3Key: String
});

module.exports = mongoose.model("Game", gameSchema);
