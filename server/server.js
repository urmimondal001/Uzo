import express from "express";
import cors from "cors";

// Import Routes
import signupRoute from "./routes/sign-up.js";
import loginRoute from "./routes/login.js";
import forgotPasswordRoute from "./routes/forgot-password.js";
import likeRoute from "./routes/like-reel.js";
import viewRoute from "./routes/view-reel.js";
import commentRoute from "./routes/comment-reel.js";
import deleteReelRoute from "./routes/delete-reel.js"; // << NEW

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", signupRoute);         // Sign Up
app.use("/api", loginRoute);          // Log In
app.use("/api", forgotPasswordRoute); // Forgot Password
app.use("/api", likeRoute);           // Like System
app.use("/api", viewRoute);           // View System
app.use("/api", commentRoute);        // Comment System
app.use("/api", deleteReelRoute);     // Delete Reel << NEW

// Default
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
