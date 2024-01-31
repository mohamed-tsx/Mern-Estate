import express from "express";
import {
  deleteUser,
  getUserListings,
  updateUser,
} from "../Controllers/userController.js";
import { verifyUser } from "../Utils/verify.js";
const router = express.Router();

router.put("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.get("/listings/:id", verifyUser, getUserListings);

export default router;
