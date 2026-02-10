const db = require('../db/pg');

async function insertVehicleHistory(data) {
  const sql = `
    INSERT INTO vehicle_telemetry_history
    (vehicle_id, kwh_delivered_dc, soc, battery_temp, ts)
    VALUES ($1, $2, $3, $4, $5)
  `;
  return db.query(sql, [
    data.vehicleId,
    data.kwhDeliveredDc,
    data.soc,
    data.batteryTemp,
    data.timestamp
  ]);
}

async function upsertVehicleLive(data) {
  const sql = `
    INSERT INTO vehicle_live_status
    (vehicle_id, latest_kwh_delivered_dc, latest_soc, latest_battery_temp, last_updated_at)
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT (vehicle_id)
    DO UPDATE SET
      latest_kwh_delivered_dc = EXCLUDED.latest_kwh_delivered_dc,
      latest_soc = EXCLUDED.latest_soc,
      latest_battery_temp = EXCLUDED.latest_battery_temp,
      last_updated_at = EXCLUDED.last_updated_at
  `;
  return db.query(sql, [
    data.vehicleId,
    data.kwhDeliveredDc,
    data.soc,
    data.batteryTemp,
    data.timestamp
  ]);
}

module.exports = {
  insertVehicleHistory,
  upsertVehicleLive
};
