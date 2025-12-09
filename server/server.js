import express from "express";
import cors from "cors";
import signupRoute from "./sign-up.js";
import loginRoute from "./login.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api", signupRoute);
app.use("/api", loginRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
