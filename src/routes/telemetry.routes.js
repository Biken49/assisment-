const express = require('express');
const router = express.Router();
const telemetryController = require('../controllers/telemetry.controller');

router.post('/ingest', telemetryController.ingestTelemetry);

module.exports = router;
    