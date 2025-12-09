import express from "express";
import cors from "cors";

import signupRoute from "./sign-up.js";
import loginRoute from "./login.js";
import forgotPasswordRoute from "./forgot-password.js";
import likeRoute from "./like-reel.js";
import viewRoute from "./view-reel.js";   // << NEW

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", forgotPasswordRoute);
app.use("/api", likeRoute);
app.use("/api", viewRoute); // << NEW

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
