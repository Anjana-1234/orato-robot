import express from 'express';
import { getProgress } from '../controllers/progress-controller.js'; // ✅ Changed filename

const router = express.Router();

router.get('/:userId', getProgress);

export default router;

