import express from "express";
import { deleteUser, updateUser } from "../Controllers/userController.js";
import { verifyUser } from "../Utils/verify.js";
const router = express.Router();

router.put("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);

export default router;
