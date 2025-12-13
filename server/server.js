import express from "express";
import cors from "cors";

// Routes
import signupRoute from "./routes/sign-up.js";
import loginRoute from "./routes/login.js";
import forgotPasswordRoute from "./routes/forgot-password.js";
import uploadReelRoute from "./routes/upload-reel.js";
import viewRoute from "./routes/view-reel.js";
import likeRoute from "./routes/like-reel.js";
import commentRoute from "./routes/comment-reel.js";
import deleteReelRoute from "./routes/delete-reel.js";
import followRoute from "./routes/follow.js";
import shareRoute from "./routes/share-reel.js";
import generateReelIdRoute from "./routes/generate-reel-id.js";
import searchRoute from "./routes/search.js"; // ✅ NEW

const app = express();

app.use(cors());
app.use(express.json());

// APIs
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", forgotPasswordRoute);
app.use("/api", uploadReelRoute);
app.use("/api", viewRoute);
app.use("/api", likeRoute);
app.use("/api", commentRoute);
app.use("/api", deleteReelRoute);
app.use("/api", followRoute);
app.use("/api", shareRoute);
app.use("/api", generateReelIdRoute);
app.use("/api", searchRoute); // ✅ NEW

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
