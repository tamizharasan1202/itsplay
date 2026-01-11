const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      userId: req.user.id,
      gameId: req.body.gameId
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Order failed" });
  }
};
