const express = require("express");
const router = express.Router();
const { getReels, uploadReel, likeReel, commentReel } = require("../controllers/reelsController");

router.get("/", getReels);
router.post("/upload", uploadReel);
router.post("/like", likeReel);
router.post("/comment", commentReel);

module.exports = router;
