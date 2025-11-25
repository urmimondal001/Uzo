const express = require("express");
const router = express.Router();
const { getReels, uploadReel } = require("../controllers/reelsController");

router.get("/", getReels);
router.post("/upload", uploadReel);

module.exports = router;
