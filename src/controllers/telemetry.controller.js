const meterModel = require('../models/meter.model');
const vehicleModel = require('../models/vehicle.model');

async function ingestTelemetry(req, res) {
  try {
    const payload = req.body;

    // Meter Stream
    if (payload.meterId) {
      await meterModel.insertMeterHistory(payload);
      await meterModel.upsertMeterLive(payload);

      return res.json({ status: 'OK', type: 'METER' });
    }

    // Vehicle Stream
    if (payload.vehicleId) {
      await vehicleModel.insertVehicleHistory(payload);
      await vehicleModel.upsertVehicleLive(payload);

      return res.json({ status: 'OK', type: 'VEHICLE' });
    }

    return res.status(400).json({ error: 'Unknown telemetry type' });
  } catch (err) {
    console.error('Ingest error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  ingestTelemetry
};
