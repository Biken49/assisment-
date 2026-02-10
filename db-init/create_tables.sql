-- Table to store meter historical data
CREATE TABLE IF NOT EXISTS meter_telemetry_history (
    id SERIAL PRIMARY KEY,
    meter_id VARCHAR(50) NOT NULL,
    kwh_consumed_ac FLOAT NOT NULL,
    voltage FLOAT NOT NULL,
    ts TIMESTAMP NOT NULL
);

-- Table to store current meter live status
CREATE TABLE IF NOT EXISTS meter_live_status (
    meter_id VARCHAR(50) PRIMARY KEY,
    latest_kwh_consumed_ac FLOAT NOT NULL,
    latest_voltage FLOAT NOT NULL,
    last_updated_at TIMESTAMP NOT NULL
);

-- Table to store vehicle historical data
CREATE TABLE IF NOT EXISTS vehicle_telemetry_history (
    id SERIAL PRIMARY KEY,
    vehicle_id VARCHAR(50) NOT NULL,
    kwh_delivered_dc FLOAT NOT NULL,
    soc FLOAT NOT NULL,
    battery_temp FLOAT NOT NULL,
    ts TIMESTAMP NOT NULL
);

-- Table to store current vehicle live status
CREATE TABLE IF NOT EXISTS vehicle_live_status (
    vehicle_id VARCHAR(50) PRIMARY KEY,
    latest_kwh_delivered_dc FLOAT NOT NULL,
    latest_soc FLOAT NOT NULL,
    latest_battery_temp FLOAT NOT NULL,
    last_updated_at TIMESTAMP NOT NULL
);
