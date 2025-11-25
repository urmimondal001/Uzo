const express = require("express");
const cors = require("cors");
require("dotenv").config();

const reelsRoute = require("./routes/reelsRoute");

const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" })); // large video support

app.use("/api/reels", reelsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
