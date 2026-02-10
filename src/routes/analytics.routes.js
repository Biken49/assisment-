const express= require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics.controller');

router.get('/performance/:vehicleId', analyticsController.getPerformance);

module.exports = router;