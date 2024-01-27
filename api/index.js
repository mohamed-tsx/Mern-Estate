import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/UserRoutes.js";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MONGO DB"))
  .catch((err) => console.log(err));

app.use("/api/test", userRoutes);

app.listen(4321, () => {
  console.log("Server is running on 4321");
});
