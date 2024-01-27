import express from "express";
import dotenv from "dotenv";
import userRoutes from "./Routes/UserRoutes.js";
import connectToDatabase from "./Config/db.js";

dotenv.config();

const app = express();

connectToDatabase();

app.use("/api/test", userRoutes);

app.listen(4321, () => {
  console.log("Server is running on 4321");
});
