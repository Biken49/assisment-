const express = require('express');
const router = express.Router();
const telemetryController = require('../controllers/telemetry.controller');

router.post('/ingest', telemetryController.ingestTelemetry);

router.get('/:vehicleId', (req, res) => {
  const { vehicleId } = req.params;
  // Return mock data
  res.json({
    vehicleId,
    totalAc: 50,
    totalDc: 45,
    efficiency: 0.9,
    avgBatteryTemp: 30,
    healthStatus: 'HEALTHY'
  });
});


module.exports = router;
    