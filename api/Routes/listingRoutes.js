import express from "express";
import { createListing } from "../Controllers/listingController.js";
import { verifyUser } from "../Utils/verify.js";
const router = express.Router();

router.post("/create", verifyUser, createListing);

export default router;
