import express from "express";
import {
  createListing,
  deleteListing,
} from "../Controllers/listingController.js";
import { verifyUser } from "../Utils/verify.js";
const router = express.Router();

router.post("/create", verifyUser, createListing);
router.delete("/delete/:id", verifyUser, deleteListing);

export default router;
