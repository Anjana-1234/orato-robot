import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import {
  getDashboard,
  getStats,
  getContinueLearning,
  getChallenges,
  updateChallengeProgress,
  getSkills,
  getRecentAchievements,
  getActivityHistory
} from '../controllers/dashboard.controller.js';

const router = express.Router();

// Optional auth: attach req.user when token exists, fallback handled in controllers
router.use(async (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-default-secret-key-change-this');
      const user = await User.findById(decoded.userId);
      if (user) req.user = user;
    }
  } catch (_error) {
    // Continue unauthenticated
  }
  next();
});

router.get('/', getDashboard);
router.get('/stats', getStats);
router.get('/continue-learning', getContinueLearning);
router.get('/challenges', getChallenges);
router.post('/challenges/update', updateChallengeProgress);
router.get('/skills', getSkills);
router.get('/achievements', getRecentAchievements);
router.get('/activity', getActivityHistory);

export default router;