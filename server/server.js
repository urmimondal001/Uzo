import express from "express";
import cors from "cors";

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= AUTH =================
import signupRoute from "./routes/sign-up.js";
import loginRoute from "./routes/login.js";
import forgotPasswordRoute from "./routes/forgot-password.js";
import updatePasswordRoute from "./routes/update-password.js";

// ================= USER =================
import createFullNameRoute from "./routes/create-full-name.js";
import updateNameRoute from "./routes/update-name.js";
import uploadProfilePicRoute from "./routes/upload-profile-pic.js";
import updateProfilePicRoute from "./routes/update-profile-pic.js";

// ================= REELS =================
import uploadReelRoute from "./routes/upload-reel.js";
import generateReelIdRoute from "./routes/generate-reel-id.js";
import saveReelRoute from "./routes/save-reel.js";
import getUserReelsRoute from "./routes/get-reels-by-user.js";
import deleteReelRoute from "./routes/delete-reel.js";

// ================= INTERACTION =================
import viewReelRoute from "./routes/view-reel.js";
import likeReelRoute from "./routes/add-like.js";
import likeCountRoute from "./routes/like-count.js";
import commentAddRoute from "./routes/add-comment.js";
import commentFetchRoute from "./routes/fetch-comments.js";
import shareReelRoute from "./routes/share-reel.js";

// ================= FOLLOW / BLOCK =================
import followRoute from "./routes/follow-user.js";
import blockUserRoute from "./routes/block-user.js";
import unblockUserRoute from "./routes/unblock-user.js";

// ================= SEARCH =================
import searchNameRoute from "./routes/search-name.js";
import searchHistoryRoute from "./routes/search-history.js";

// ================= REPORT =================
import reportRoute from "./routes/report.js";

// ================= CLOUD =================
import uploadCloudRoute from "./routes/upload-to-cloud.js";

// ================= ROUTES USE =================
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", forgotPasswordRoute);
app.use("/api", updatePasswordRoute);

app.use("/api", createFullNameRoute);
app.use("/api", updateNameRoute);
app.use("/api", uploadProfilePicRoute);
app.use("/api", updateProfilePicRoute);

app.use("/api", uploadReelRoute);
app.use("/api", generateReelIdRoute);
app.use("/api", saveReelRoute);
app.use("/api", getUserReelsRoute);
app.use("/api", deleteReelRoute);

app.use("/api", viewReelRoute);
app.use("/api", likeReelRoute);
app.use("/api", likeCountRoute);
app.use("/api", commentAddRoute);
app.use("/api", commentFetchRoute);
app.use("/api", shareReelRoute);

app.use("/api", followRoute);
app.use("/api", blockUserRoute);
app.use("/api", unblockUserRoute);

app.use("/api", searchNameRoute);
app.use("/api", searchHistoryRoute);

app.use("/api", reportRoute);

app.use("/api", uploadCloudRoute);

// ================= DEFAULT =================
app.get("/", (req, res) => {
  res.send("🔥 Reels Server Running");
});

// ================= START =================
app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
