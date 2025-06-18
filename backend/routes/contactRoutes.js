import express from 'express';
import { sendFeedback } from '../controllers/contactController.js';
import { authenticateOptional } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/contact", sendFeedback);

export default router;