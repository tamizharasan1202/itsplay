const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { createOrder } = require("../controllers/order.controller");

router.post("/", auth, createOrder);

module.exports = router;
