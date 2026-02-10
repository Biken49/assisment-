const express = require('express');
const bodyParser = require('body-parser');

const telemetryRoutes = require('./routes/telemetry.routes');
const analyticsRoutes = require('./routes/analytics.routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/telemetry', telemetryRoutes);
app.use('/api/v1/analytics', analyticsRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
