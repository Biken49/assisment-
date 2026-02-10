const db = require('../db/pg');

async function getVehiclePerformance(vehicleId) {
  // Vehicle (DC + Temp)
  const vehicleResult = await db.query(
    `
    SELECT
      SUM(kwh_delivered_dc) AS total_dc,
      AVG(battery_temp) AS avg_temp
    FROM vehicle_telemetry_history
    WHERE vehicle_id = $1
      AND ts >= NOW() - INTERVAL '24 hours'
    `,
    [vehicleId]
  );

  // Demo assumption: meter_id == vehicle_id
  const meterResult = await db.query(
    `
    SELECT
      SUM(kwh_consumed_ac) AS total_ac
    FROM meter_telemetry_history
    WHERE meter_id = $1
      AND ts >= NOW() - INTERVAL '24 hours'
    `,
    [vehicleId]
  );

  const totalDc = Number(vehicleResult.rows[0].total_dc || 0);
  const totalAc = Number(meterResult.rows[0].total_ac || 0);
  const avgTemp = Number(vehicleResult.rows[0].avg_temp || 0);

  const efficiency = totalAc > 0 ? totalDc / totalAc : 0;

  let healthStatus = 'HEALTHY';
  if (efficiency < 0.85) {
    healthStatus = 'POTENTIAL_HARDWARE_ISSUE';
  }

  return {
    vehicleId,
    totalAc,
    totalDc,
    efficiency,
    avgBatteryTemp: avgTemp,
    healthStatus
  };
}

module.exports = {
  getVehiclePerformance
};
