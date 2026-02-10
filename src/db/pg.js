const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'energy_db',
  port: 5432,
  max: 10
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
