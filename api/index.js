import express from "express";
import dotenv from "dotenv";
import userRoutes from "./Routes/UserRoutes.js";
import authRoutes from "./Routes/authRoutes.js";
import connectToDatabase from "./Config/db.js";
import errorMiddleWare from "./Middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

connectToDatabase();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user/", userRoutes);
app.use("/api/auth/", authRoutes);

app.use(errorMiddleWare);

app.listen(4321, () => {
  console.log("Server is running on 4321");
});
