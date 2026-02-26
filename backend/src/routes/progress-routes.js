const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

// Define the GET route and connect it to the controller
// The actual path will be /api/progress/:userId based on how we mount it in app.js
router.get('/:userId', progressController.getProgress);

module.exports = router;