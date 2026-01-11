const Game = require("../models/Game");

exports.addGame = async (req, res) => {
  const game = await Game.create(req.body);
  res.json(game);
};

exports.getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};
