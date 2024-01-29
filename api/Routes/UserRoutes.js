import express from "express";
import { updateUser } from "../Controllers/userController.js";
import { verifyUser } from "../Utils/verify.js";
const router = express.Router();

router.put("/update/:id", verifyUser, updateUser);

export default router;
