const analyticsService = require('../services/analytics.services');

async function getPerformance(req, res) {
  try {
    const { vehicleId } = req.params;

    const result = await analyticsService.getVehiclePerformance(vehicleId);
    console.log("result:",result);
    res.json(result);
  } catch (err) {
    console.error('Analytics error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getPerformance
};
