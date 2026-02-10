const { Pool } = require('pg');
require('dotenv').config(); // Load .env variables

const pool = new Pool({
  host: process.env.DB_HOST,       // e.g., "db" for Docker
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10),
  max: parseInt(process.env.DB_MAX_POOL, 10) || 10, // optional
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
