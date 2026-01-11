const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

router.get("/my-games", auth, (req, res) => {
  res.json({
    message: "Protected data",
    userId: req.userId
  });
});

module.exports = router;
