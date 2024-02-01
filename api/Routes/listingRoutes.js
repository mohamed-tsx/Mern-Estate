import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  updateListing,
} from "../Controllers/listingController.js";
import { verifyUser } from "../Utils/verify.js";
const router = express.Router();

router.post("/create", verifyUser, createListing);
router.delete("/delete/:id", verifyUser, deleteListing);
router.put("/update/:id", verifyUser, updateListing);
router.get("/get/:id", getListing);

export default router;
