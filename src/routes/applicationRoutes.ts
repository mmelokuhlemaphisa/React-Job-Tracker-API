import { Router } from "express";
import { AddApplication, deleteApplicationById, getAllApplications, getApplicationById, updateApplicationById } from "../controllers/applicationController";

const router = Router();

router.post("/applications", AddApplication);
router.get("/applications", getAllApplications);
router.get("/applications/:id", getApplicationById);
router.put("/applications/:id", updateApplicationById);
router.delete("/applications/:id", deleteApplicationById);

export default router;