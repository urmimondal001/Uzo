import express from "express";
import cors from "cors";

// Import Routes
import signupRoute from "./routes/sign-up.js";
import loginRoute from "./routes/login.js";
import forgotPasswordRoute from "./routes/forgot-password.js";
import likeRoute from "./routes/like-reel.js";
import viewRoute from "./routes/view-reel.js";
import commentRoute from "./routes/comment-reel.js";
import deleteReelRoute from "./routes/delete-reel.js";
import followRoute from "./routes/follow.js";
import shareReelRoute from "./routes/share-reel.js"; // <-- New

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", forgotPasswordRoute);
app.use("/api", likeRoute);
app.use("/api", viewRoute);
app.use("/api", commentRoute);
app.use("/api", deleteReelRoute);
app.use("/api", followRoute);
app.use("/api", shareReelRoute); // <-- New

// Default
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
