const db = require('../db/pg');

async function insertMeterHistory(data) {
  const sql = `
    INSERT INTO meter_telemetry_history
    (meter_id, kwh_consumed_ac, voltage, ts)
    VALUES ($1, $2, $3, $4)
  `;
  return db.query(sql, [
    data.meterId,
    data.kwhConsumedAc,
    data.voltage,
    data.timestamp
  ]);
}

async function upsertMeterLive(data) {
  const sql = `
    INSERT INTO meter_live_status
    (meter_id, latest_kwh_consumed_ac, latest_voltage, last_updated_at)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (meter_id)
    DO UPDATE SET
      latest_kwh_consumed_ac = EXCLUDED.latest_kwh_consumed_ac,
      latest_voltage = EXCLUDED.latest_voltage,
      last_updated_at = EXCLUDED.last_updated_at
  `;
  return db.query(sql, [
    data.meterId,
    data.kwhConsumedAc,
    data.voltage,
    data.timestamp
  ]);
}

module.exports = {
  insertMeterHistory,
  upsertMeterLive
};
