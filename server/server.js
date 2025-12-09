import express from "express";
import cors from "cors";

// Import Routes
import signupRoute from "./sign-up.js";
import loginRoute from "./login.js";
import forgotPasswordRoute from "./forgot-password.js";
import likeRoute from "./like-reel.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", signupRoute);         // Sign Up
app.use("/api", loginRoute);          // Log In
app.use("/api", forgotPasswordRoute); // Forgot Password
app.use("/api", likeRoute);           // Like System

// Default
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
