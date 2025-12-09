import express from "express";
import cors from "cors";
import signupRoute from "./sign-up.js";

const app = express();

app.use(cors());
app.use(express.json());

// Sign up route
app.use("/api", signupRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
