import { Router } from "express";
import { AddApplication, getAllApplications, getApplicationById } from "../controllers/applicationController";

const router = Router();

router.post("/applications", AddApplication);
router.get("/applications", getAllApplications);
router.get("/applications/:id", getApplicationById);

export default router;