import express from "express";
import cors from "cors";
import signupRoute from "./sign-up.js";
import loginRoute from "./login.js";
import forgotPasswordRoute from "./forgot-password.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", forgotPasswordRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
