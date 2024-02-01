import express from "express";
import {
  deleteUser,
  getUserListings,
  updateUser,
  getUser,
} from "../Controllers/userController.js";
import { verifyUser } from "../Utils/verify.js";
const router = express.Router();

router.put("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);
router.get("/listings/:id", verifyUser, getUserListings);
router.get("/:id", verifyUser, getUser);

export default router;
