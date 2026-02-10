-- Demo meter historical data
INSERT INTO meter_telemetry_history (meter_id, kwh_consumed_ac, voltage, ts)
VALUES
('meter_001', 12.5, 230, '2026-02-10 08:00:00'),
('meter_002', 15.2, 235, '2026-02-10 08:05:00');

-- Demo meter live status
INSERT INTO meter_live_status (meter_id, latest_kwh_consumed_ac, latest_voltage, last_updated_at)
VALUES
('meter_001', 12.5, 230, '2026-02-10 08:00:00'),
('meter_002', 15.2, 235, '2026-02-10 08:05:00')
ON CONFLICT (meter_id) DO UPDATE
SET
latest_kwh_consumed_ac = EXCLUDED.latest_kwh_consumed_ac,
latest_voltage = EXCLUDED.latest_voltage,
last_updated_at = EXCLUDED.last_updated_at;

-- Demo vehicle historical data
INSERT INTO vehicle_telemetry_history (vehicle_id, kwh_delivered_dc, soc, battery_temp, ts)
VALUES
('vehicle_001', 50.2, 80, 30, '2026-02-10 08:00:00'),
('vehicle_002', 42.7, 75, 32, '2026-02-10 08:05:00');

-- Demo vehicle live status
INSERT INTO vehicle_live_status (vehicle_id, latest_kwh_delivered_dc, latest_soc, latest_battery_temp, last_updated_at)
VALUES
('vehicle_001', 50.2, 80, 30, '2026-02-10 08:00:00'),
('vehicle_002', 42.7, 75, 32, '2026-02-10 08:05:00')
ON CONFLICT (vehicle_id) DO UPDATE
SET
latest_kwh_delivered_dc = EXCLUDED.latest_kwh_delivered_dc,
latest_soc = EXCLUDED.latest_soc,
latest_battery_temp = EXCLUDED.latest_battery_temp,
last_updated_at = EXCLUDED.last_updated_at;
